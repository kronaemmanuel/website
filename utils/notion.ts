import { Client } from "https://deno.land/x/notion_sdk/src/mod.ts";
import {
  BlockObjectRequest,
  PartialBlockObjectResponse,
} from "https://deno.land/x/notion_sdk@v1.0.4/src/api-endpoints.ts";
import "dotenv";
import { parse } from "datetime";

export type Tag = {
  name: string;
  color: string;
};

export type Post = {
  slug: string;
  created_time: string;
  title: string;
  tags: Tag[];
  description: string;
  contents?: PartialBlockObjectResponse[] | BlockObjectRequest[];
};

const notion = new Client({
  auth: Deno.env.get("NOTION_API_KEY"),
});

async function getPost(slug: string): Promise<Post | null> {
  /*
  TODO:
  - handling errors, multiple results comeback? no article?
  */
  try {
    const databaseResponse = await notion.databases.query({
      database_id: Deno.env.get("NOTION_DATABASE_ID") ?? "",
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    const postResponse = databaseResponse.results[0];

    const post: Post = {
      slug: postResponse.properties.Slug.rich_text[0].plain_text,
      created_time: Intl.DateTimeFormat("en-GB", { dateStyle: "full" })
        .format(
          parse(postResponse.properties.Date.date.start, "yyyy-MM-dd"),
        ),
      title: postResponse.properties.Name.title[0].plain_text,
      tags: postResponse.properties.Tags.multi_select.map((tag) => {
        return ({
          name: tag.name,
          color: tag.color,
        });
      }),
      description: postResponse.properties.Description.rich_text[0].plain_text,
    };

    const contentsResponse = await notion.blocks.children.list({
      block_id: postResponse.id,
    });

    post.contents = contentsResponse.results;

    return post;
  } catch (error: unknown) {
    console.log((error as Error).message);
    return null;
  }
}

async function getAllPosts(): Promise<Post[] | null | undefined> {
  try {
    const response = await notion.databases.query({
      database_id: Deno.env.get("NOTION_DATABASE_ID") ?? "",
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    return response.results.flatMap((post) => {
      /* These ugly looking guard clauses prevent linting errors, until i find a better way */
      if (!("properties" in post)) {
        return [];
      }
      if (!("rich_text" in post.properties.Slug)) {
        return [];
      }
      if (!("title" in post.properties.Name)) {
        return [];
      }
      if (!("multi_select" in post.properties.Tags)) {
        return [];
      }
      if (!("rich_text" in post.properties.Description)) {
        return [];
      }
      if (!("date" in post.properties.Date)) {
        return [];
      }
      return ({
        slug: post.properties.Slug.rich_text[0].plain_text,
        created_time: Intl.DateTimeFormat("en-GB", { dateStyle: "full" })
          .format(
            parse(post.properties.Date.date.start, "yyyy-MM-dd"),
          ),
        title: post.properties.Name.title[0].plain_text,
        tags: post.properties.Tags.multi_select.map((tag) => {
          return ({
            name: tag.name,
            color: tag.color,
          });
        }),
        description: post.properties.Description.rich_text[0].plain_text,
      });
    });
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
}

export { getAllPosts, getPost };

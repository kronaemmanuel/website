import { Client } from "https://deno.land/x/notion_sdk/src/mod.ts";
import { QueryDatabaseResponse } from "https://deno.land/x/notion_sdk@v1.0.4/src/api-endpoints.ts";
import "dotenv";
import { format, parse } from "datetime";

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
};

const notion = new Client({
  auth: Deno.env.get("NOTION_API_KEY"),
});

async function getPost(slug: string): Promise<QueryDatabaseResponse | null> {
  return await notion.databases.query({
    database_id: Deno.env.get("NOTION_DATABASE_ID") ?? "",
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });
}

async function getAllPosts(): Promise<Post[] | null> {
  try {
    const response = await notion.databases.query({
      database_id: Deno.env.get("NOTION_DATABASE_ID") ?? "",
    });

    return response.results.map((post) => {
      return ({
        slug: post.properties.Slug.rich_text[0].plain_text,
        created_time: format(
          parse(post.created_time, "yyyy-MM-ddTHH:mm:ss.sssZ"),
          "dd-MM-yyyy",
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
    throw Error(error.message);
  }
}

export { getAllPosts, getPost };

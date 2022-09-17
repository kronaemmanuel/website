import { Handlers, PageProps } from "$fresh/server.ts";
import { QueryDatabaseResponse } from "https://deno.land/x/notion_sdk@v1.0.4/src/api-endpoints.ts";
import { getPost } from "../../utils/blog.ts";

export const handler: Handlers<QueryDatabaseResponse | null> = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const response = await getPost(slug);
    return ctx.render(response);
  },
};

export default function Page(
  { data }: PageProps<QueryDatabaseResponse | null>,
) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      {data.results.length}
    </div>
  );
}

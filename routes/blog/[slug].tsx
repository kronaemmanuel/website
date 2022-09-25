import { Handlers, PageProps } from "$fresh/server.ts";
import Block from "../../components/Block.tsx";
import Navbar from "../../islands/Navbar.tsx";
import { getPost, Post } from "../../utils/notion.ts";

export const handler: Handlers<Post | null> = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const response = await getPost(slug);
    return ctx.render(response);
  },
};

export default function Page(
  { data: post }: PageProps<Post | null>,
) {
  if (!post?.contents) {
    return <h1>Post Contents not found!</h1>;
  }

  return (
    <>
      <Navbar active="/blog" />
      <article class="mt-16 max-w-screen-md w-full mx-auto">
        <header>
          <p>
            <time>{post.created_time}</time>
          </p>
          <h1 class="text-5xl font-bold mt-4">{post.title}</h1>
          <div class="mt-4 flex items-center whitespace-nowrap">
            <img
              class="w-10 h-10 rounded-full"
              src="/profile_pic_cropped.jpeg"
            />
            <div class="ml-3 text-sm">
              <p>Krona Emmanuel</p>
              <a
                class="text-blue-500 mt-1"
                href="https://www.linkedin.com/in/kronaemmanuel/"
              >
                @kronaemmanuel
              </a>
            </div>
          </div>
        </header>
        <main class="mt-8 prose max-w-full">
          {post.contents.map((block) => <Block block={block} />)}
        </main>
      </article>
    </>
  );
}

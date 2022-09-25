import { Handlers, PageProps } from "$fresh/server.ts";

import PostPreview from "../../components/PostPreview.tsx";
import Navbar from "../../islands/Navbar.tsx";
import { getAllPosts, Post } from "../../utils/notion.ts";

export const handler: Handlers<Post[] | null> = {
  async GET(_, ctx) {
    const posts = await getAllPosts();
    return ctx.render(posts);
  },
};

export default function Blog(
  { data: posts }: PageProps<Post[] | null>,
) {
  if (!posts) {
    return <h1>No blogposts found!</h1>;
  }

  return (
    <>
      <Navbar active="/blog" />
      <div class="mt-16 max-w-screen-md mx-auto">
        <h1 class="text-5xl font-bold">Blog</h1>
        <div class="mt-8">
          {posts.map((post) => <PostPreview post={post} />)}
        </div>
      </div>
    </>
  );
}

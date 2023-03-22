import { Handlers, PageProps } from "$fresh/server.ts";

import { Container } from "../../components/Container.tsx";
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
    return (
      <>
        <Navbar active="/blog" />
        <Container>
          <h1>No blogposts found!</h1>
          <p>
            Krona's blogposts database could not be reached. Check if there is a
            network error on your side. If there isn't, please inform Krona at 
            <a href="mailto:kronaemmanuelwork@gmail.com">
              kronaemmanuelwork@gmail.com
            </a>.
          </p>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar active="/blog" />
      <div class="mt-4 sm:mt-16 max-w-screen-md w-full mx-auto px-4 sm:px-0">
        <h1 class="text-5xl font-bold">Blog</h1>
        <div class="mt-8">
          {posts.map((post) => <PostPreview post={post} />)}
        </div>
      </div>
    </>
  );
}

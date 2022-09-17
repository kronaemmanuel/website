import { Post } from "../utils/blog.ts";
import Tag from "./Tag.tsx";

type PostPreviewProps = {
  post: Post;
};

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <>
      <hr />
      <article class="py-8 grid sm:grid-cols-3 gap-2">
        <div class="w-56 text-gray-500">
          <p>
            <time>{post.created_time}</time>
          </p>
          <div class="mt-4 text-sm text-gray-400 flex flex-wrap">
            {post.tags.map((tag) => <Tag tag={tag} />)}
          </div>
        </div>
        <a
          class="sm:col-span-2 group cursor-pointer"
          href={`/blog/${post.slug}`}
        >
          <h3 class="text-2xl text-gray-900 font-bold group-hover:underline">
            {post.title}
          </h3>
          <p class="mt-4 text-gray-900">{post.description}</p>
        </a>
      </article>
    </>
  );
}

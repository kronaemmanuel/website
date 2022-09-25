import { Tag as TagType } from "../utils/notion.ts";

type TagProps = {
  tag: TagType;
};

export default function Tag({ tag }: TagProps) {
  return (
    <p
      class={`bg-${tag.color}-500 text-white px-3 py-2 rounded-md text-sm font-medium mr-2 mt-2`}
    >
      {tag.name}
    </p>
  );
}

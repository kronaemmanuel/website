import { BlockObjectRequest } from "https://deno.land/x/notion_sdk@v1.0.4/src/api-endpoints.ts";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? "font-bold" : "",
          italic ? "font-italic" : "",
          strikethrough ? "linethrough" : "",
          underline ? "underline" : "",
          text.link ? "text-blue underline" : "",
        ].join(" ")}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderNestedList = (block: BlockObjectRequest) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return (
      <ol>
        {value.children.map((block: BlockObjectRequest) => (
          <Block block={block} />
        ))}
      </ol>
    );
  }
  return (
    <ul>
      {value.children.map((block: BlockObjectRequest) => (
        <Block
          block={block}
        />
      ))}
    </ul>
  );
};

type BlockProps = {
  block: BlockObjectRequest;
};

export default function Block({ block }: BlockProps) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 class="font-bold text-5xl">
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 class="font-bold">
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 class="font-bold">
          <Text text={value.rich_text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li class="ml-4">
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />
            {" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "image": {
      const src = value.type === "external"
        ? value.external.url
        : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    }
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return <pre class="bg-gray-800 text-white overflow-x-scroll">
          {value.rich_text.map(codeblock => (
              <code>
                {codeblock.plain_text}
              </code>
           ))}
      </pre>;
    case "bookmark": {
      const href = value.url;
      return (
        <a href={href} target="_blank">
          {href}
        </a>
      );
    }
    default:
      return <p>Unsupported Block</p>;
  }
}

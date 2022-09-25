import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export function Container(props: Props) {
  return (
    <div class="mt-4 sm:mt-16 max-w-screen-md w-full mx-auto px-4 sm:px-0">
      {props.children}
    </div>
  );
}

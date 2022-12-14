import { JSX } from "preact";

export function Container(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      class="mt-4 sm:mt-16 max-w-screen-md w-full mx-auto px-4 text-gray-900"
      {...props}
    >
      {props.children}
    </div>
  );
}

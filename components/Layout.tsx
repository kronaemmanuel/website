import type { ComponentChildren } from "preact";

import Navbar from "../islands/Navbar.tsx";

interface LayoutProps {
  active: string;
  children: ComponentChildren;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <body class="antialiased bg-white text-slate-500 font-sans">
        <Navbar active={props.active} />
        <div class="container w-full md:max-w-4xl mx-auto pt-20">
          {props.children}
        </div>
      </body>
    </>
  );
}

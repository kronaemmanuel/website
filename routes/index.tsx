import { PageProps } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx";

export default function Home(props: PageProps) {
  return (
    <>
      <Navbar active="/" />
      <h1>Home</h1>
      <a href="https://fresh.deno.dev">
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge-dark.svg"
          alt="Made with Fresh"
        />
      </a>
    </>
  );
}

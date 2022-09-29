import { PageProps } from "$fresh/server.ts";
import { Container } from "../components/Container.tsx";
import Navbar from "../islands/Navbar.tsx";
import { site } from "../data/site.ts";

export default function Home(props: PageProps) {
  return (
    <>
      <Navbar active="/" showLogo={false} />
      <Container>
        <div class="flex flex-col sm:flex-row gap-8 w-full">
          <div class="flex justify-between items-center">
            <img
              class="w-24 md:w-32 h-24 md:h-32 rounded-full bg-white"
              src="/profile_pic.jpeg"
              alt="krona emmanuel"
              width="500"
              height="500"
            />
          </div>
          <div class="flex flex-col justify-center">
            <p class="leading-tight text-gray-900 text-2xl md:text-3xl">
              Hello there, I'm
            </p>
            <h1 class="leading-tight text-gray-900 text-4xl md:text-5xl font-semibold">
              Krona Emmanuel
            </h1>
          </div>
        </div>
        <div class="mt-16 prose prose-lg max-w-none">
          <p>
            I'm a developer based in Lahore, Pakistan. I create software for a
            living (and for fun too!).
          </p>
          <p>
            I'm currently looking for a cool place to work at. You can view my
            resume <a href="/resume">here.</a>
          </p>
          <p>
            This website is made with{" "}
            <a href="https://fresh.deno.dev/">Fresh</a> and{" "}
            <a href="https://deno.land/">Deno</a>. The <a href="/blog">blog</a>
            {" "}
            on this website is powered by Notion by using the Notion Public API.
            If you want to see how it is implemented, check out the{" "}
            <a href={site.viewSourceUrl}>
              source code
            </a>{" "}
            for the website.
          </p>
          <p>
            I like to play Chess sometimes (although I'm still very much a
            beginner). Send me a challenge on{" "}
            <a href="https://lichess.org/@/kro_naaa">
              Lichess
            </a>{" "}
            (its free and open source!)
          </p>
        </div>
      </Container>
    </>
  );
}

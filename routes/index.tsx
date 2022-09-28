import { PageProps } from "$fresh/server.ts";
import { Container } from "../components/Container.tsx";
import Navbar from "../islands/Navbar.tsx";

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
        <div>
          <p class="mt-16 leading-7 text-gray-900 text-lg">
            I'm a developer based in Lahore, Pakistan. I create software for a
            living (and for fun too!).
          </p>
          <p class="mt-8 leading-7 text-gray-900 text-lg">
            I'm currently looking for a cool place to work at. You can view my
            resume <a class="underline font-bold" href="/resume">here.</a>
          </p>
        </div>
      </Container>
    </>
  );
}

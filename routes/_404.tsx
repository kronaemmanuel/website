import { UnknownPageProps } from "$fresh/server.ts";
import { Container } from "../components/Container.tsx";
import Navbar from "../islands/Navbar.tsx";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <Navbar active="/" showLogo={false} />
      <Container>
        <h1 class="leading-tight text-gray-900 text-4xl md:text-5xl font-semibold">
          404: Not Found
        </h1>
        <div class="prose prose-lg mt-8">
          <p>
            The page you are looking for could not be found: {url.pathname}
          </p>
          <p>
            If it is due to a broken link on my website, please let me know
            through the{" "}
            <a href="/contact">contact page</a>. If the contact page itself is
            broken though, then you can let me know at{" "}
            <a href="mailto:kronaemmanuelwork@gmail.com">
              kronaemmanuelwork@gmail.com
            </a>.
          </p>
        </div>
      </Container>
    </>
  );
}

import { Container } from "./Container.tsx";
import { site } from "../data/site.ts";

export function Footer() {
  return (
    <footer class="w-full pt-10 pb-4">
      <Container>
        <div class="flex flex-col sm:flex-row items-center justify-center space-x-2">
          <p>
            &copy; {new Date().getFullYear()} {site.copyrightName}
          </p>
          <p class="hidden sm:block">
            •
          </p>
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge-dark.svg"
              alt="Made with Fresh"
            />
          </a>
          <p class="hidden sm:block">
            •
          </p>
          <a class="hover:text-underline" href={site.viewSourceUrl}>
            View Source
          </a>
        </div>
      </Container>
    </footer>
  );
}

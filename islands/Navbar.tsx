import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

interface NavbarProps {
  active: string;
  showLogo?: boolean;
}

export default function Navbar({ active, showLogo = true }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div class="sticky w-full z-20 top-0 backdrop-filter backdrop-blur-md border-b border-gray-200">
      <div
        class="h-1 z-20 top-0"
        style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"
      >
      </div>

      <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div class="pl-4 md:pl-0">
          {showLogo && (
            <a
              class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
              href="/"
            >
              Krona Emmanuel
            </a>
          )}
        </div>

        <div class="block lg:hidden pr-4">
          <Button
            class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Button>
        </div>

        <nav
          class={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 z-20 ${
            open ? "" : "hidden"
          }`}
        >
          <ul class="lg:flex justify-end flex-1 items-center">
            {routes.map((route) => (
              <li class="ml-3">
                <a
                  class={`inline-block py-2 pl-4 no-underline ${
                    active === route.href
                      ? "text-gray-900 font-bold"
                      : "text-gray-600 hover:text-underline"
                  } `}
                  href={route.href}
                >
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

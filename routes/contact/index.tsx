import { Container } from "../../components/Container.tsx";
import Navbar from "../../islands/Navbar.tsx";

export default function Contact() {
  return (
    <>
      <Navbar active="/contact" showLogo={false} />
      <Container>
        <h1 class="leading-tight text-gray-900 text-4xl md:text-5xl font-semibold">
          Let's get in touch
        </h1>
        <div class="mt-8 prose">
          <p>
            Email:{" "}
            <a href="mailto:kronaemmanuelwork@gmail.com">
              kronaemmanuelwork@gmail.com
            </a>
            <br />(You can probably guess my 'non-work' email.)
          </p>
        </div>
      </Container>
    </>
  );
}

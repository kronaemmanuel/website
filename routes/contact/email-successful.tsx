import { Container } from "../../components/Container.tsx";
import Navbar from "../../islands/Navbar.tsx";

export default function EmailSuccessful() {
  return (
    <>
      <Navbar active="/contact" showLogo={false} />
      <Container>
        <h1 class="leading-tight text-gray-900 text-4xl md:text-5xl font-semibold">
          Thanks!
        </h1>
        <p class="prose">I'll get back to you as soon as I can.</p>
      </Container>
    </>
  );
}

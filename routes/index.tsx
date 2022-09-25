import { PageProps } from "$fresh/server.ts";
import { Container } from "../components/Container.tsx";
import Navbar from "../islands/Navbar.tsx";

export default function Home(props: PageProps) {
  return (
    <>
      <Navbar active="/" />
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  );
}

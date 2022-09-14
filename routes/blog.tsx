import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

import Layout from "../components/Layout.tsx";

export default function Blog(props: PageProps) {
  return (
    <>
      <Head>
        <title>Blog - Krona Emmanuel</title>
      </Head>
      <Layout active="/blog">
        <h1>Blog</h1>
      </Layout>
    </>
  );
}

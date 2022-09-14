import { asset, Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

import Layout from "../components/Layout.tsx";

const TITLE = "Krona Emmanuel";
const DESCRIPTION =
  "Krona Emmanuel, a full stack web developer by trade, a problem-solver by nature. Writing code allows me solve problems and that's why I'm passionate about it. I have been doing freelance and part time jobs, along with university for about 5 years now. Now looking for a full time opportunity where I can work on impactful projects, while improving my development workflow and skills.Krona Emmanuel, a full stack web developer by trade, a problem-solver by nature. Writing code allows me solve problems and that's why I'm passionate about it. I have been doing freelance and part time jobs, along with university for about 5 years now. Now looking for a full time opportunity where I can work on impactful projects, while improving my development workflow and skills.";

export default function Home(props: PageProps) {
  const ogImageUrl = new URL(asset("/profile-pic.jpeg"), props.url).href;
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <Layout active="/">
        <h1>Home</h1>
        <a href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge-dark.svg"
            alt="Made with Fresh"
          />
        </a>
      </Layout>
    </>
  );
}

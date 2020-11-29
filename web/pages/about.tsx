import Link from "next/link";
import Layout from "../frontend/components/Layout";

const AboutPage = ({ clientId, state, redirectURI }: any) => {
  const api_url =
    "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" +
    clientId +
    "&redirect_uri=" +
    redirectURI +
    "&state=" +
    state;
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
      <a href={api_url}>
        <img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG" />
      </a>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      state: process.env.NAVER_STATE,
      clientId: process.env.NAVER_CLIENT_ID,
      redirectURI: encodeURI(process.env.NAVER_REDIRECT_URI || ""),
    },
  };
}

export default AboutPage;

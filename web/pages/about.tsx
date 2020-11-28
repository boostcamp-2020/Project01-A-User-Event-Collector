import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => {
  const client_id = process.env.NAVER_CLIENT_ID;
  const redirectURI = encodeURI("http://localhost:3000/api/auth/naver");
  const state = process.env.NAVER_STATE;

  const api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;

  return <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <a href={api_url}><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>
  </Layout>
}

export default AboutPage;

import Link from "next/link";
import Layout from "../frontend/components/Layout";

const AboutPage = () => {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
      <a href="http://localhost:4000/api/auth/naverLogin">
        <img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG" />
      </a>
    </Layout>
  );
};

export default AboutPage;

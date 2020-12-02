import Link from "next/link";
import Layout from "../../frontend/components/Layout";
import Img from "../../frontend/components/Img";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>

    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Img
      src="https://musicmeta-phinf.pstatic.net/album/005/094/5094136.jpg?type=r360Fll"
      varient="todayNews"
    />
  </Layout>
);

export default IndexPage;

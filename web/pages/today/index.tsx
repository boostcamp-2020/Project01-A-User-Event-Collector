import Link from "next/link";
import Layout from "../../frontend/components/Layout";
import { MagazineImg } from "../../frontend/components/Img";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>

    <MagazineImg src="examp.img" />

    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;

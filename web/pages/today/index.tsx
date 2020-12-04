import Link from "next/link";
import { memo } from "react";
import Img from "../../components/Img";
import HotMagCard from "../../components/HotMagCard";
import GlobalStyles from "../../components/GlobalStyles";

const IndexPage = memo(() => (
  <>
    <HotMagCard />

    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Img
      src="https://musicmeta-phinf.pstatic.net/album/005/094/5094136.jpg?type=r360Fll"
      varient="todayNews"
    />
    <GlobalStyles />
  </>
));

export default IndexPage;

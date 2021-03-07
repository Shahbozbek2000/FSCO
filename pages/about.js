import Head from "next/head";
import { SecondPage } from "../secondComponent/SecondPage";



export default function about() {
  return (
    <div>
      <Head>
        <title>FSCO in Tashkent | About</title>
        <meta name="keywords" content="FSCO in Tashkent" />
      </Head>
      <SecondPage/>
    </div>
  );
}

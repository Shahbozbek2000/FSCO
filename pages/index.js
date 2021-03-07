import Head from "next/head";
import { FirstPage } from "../components/FirstPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FSCO</title>
        <meta name="keywords" content="Beautiful website" />
      </Head>
      <FirstPage />
    </div>
  );
}

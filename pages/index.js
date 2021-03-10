import Head from "next/head";
import { FirstPage } from "../components/FirstPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FSCO</title>
        <meta name="keywords" content="Beautiful website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
    crossorigin="anonymous" />
      </Head>
      <FirstPage />
    </div>
  );
}

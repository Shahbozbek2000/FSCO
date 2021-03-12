import Head from "next/head";
import { CompanyInfo } from "../../thirdComponent/webDevelopmentPage/CompanyInfo";
import { Courses } from "../../thirdComponent/webDevelopmentPage/Courses";
import { Header } from "../../thirdComponent/webDevelopmentPage/Header";
import { Process } from "../../thirdComponent/webDevelopmentPage/Process";
import { WebCategory } from "../../thirdComponent/webDevelopmentPage/WebCategory";

export default function web_development() {
  return (
    <div>
      <Head>
        <title>Web Development Page</title>
        <meta name="keywords" content="Web Development" />
        <meta />
      </Head>
      <Header />
      <Courses />

      <Process />
      <WebCategory />
      <CompanyInfo />
    </div>
  );
}

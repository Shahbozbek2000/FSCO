import { DevelopmentSuccess } from "../thirdComponent/DevelopmentSuccess";
import { TabContent } from "../thirdComponent/TabContent";
import Head from "next/head";
import { Mobile } from "../thirdComponent/Mobile";
import { ServiceTitle } from "../thirdComponent/ServiceTitle";
import { Programming } from "../thirdComponent/Programming";
import { ProgrammingLanguage } from "../thirdComponent/ProgrammingLanguage";
import { MobileList } from "../thirdComponent/MobileList";

export default function services() {
  return (
    <div>
      <Head>
        <title>Services </title>
        <meta name="keywords" content="FSCO in Tashkent" />
        <link
          href="//db.onlinewebfonts.com/c/0376a58122a881d16a294512d3c947b1?family=ProximaNova-Regular"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Mobile />
      <ServiceTitle />
      <Programming/>
      <ProgrammingLanguage/>
      <MobileList/>
      <TabContent />
      <DevelopmentSuccess />
    </div>
  );
}

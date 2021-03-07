import { ClientsLogo } from "../components/ClientsLogo";
import Services from "../components/Services";
import Projects from "../components/Projects";
import { Industries } from "../components/Industries";
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import { BackgroundVideo } from "./BackgroundVideo";

export function FirstPage() {
  return (
    <div>
     <BackgroundVideo/>
      <ClientsLogo />
      <Services />
      <Projects />
      <Industries />
      <Contact />
      
    </div>
  );
}

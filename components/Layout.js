import { BackgroundVideo } from "./BackgroundVideo";
import { Dynamic } from "./Dynamic";
import Footer from "./Footer";
import { Navbar } from "./Nav";
import Sections from "./Sections";
import { ArrowUp } from "./ArrowUp";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      
      <ArrowUp />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

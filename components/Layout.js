import { BackgroundVideo } from "./BackgroundVideo";
import Footer from "./Footer";
import { Navbar } from "./Nav";
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

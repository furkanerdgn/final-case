import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/FooterComp";

function Layout() {
  return (
    <>
      <Navbar />
      <section className="container">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default Layout;

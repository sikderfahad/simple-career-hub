import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useEffect } from "react";

const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <main className="w-11/12 md:w-10/12 mx-auto my-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;

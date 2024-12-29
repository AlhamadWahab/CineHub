import React, { useEffect, useState } from "react";
import Header from "../../pages/header/Header";
import Banner from "../../pages/banner/Banner";
import MainBody from "../../pages/mainBody/MainBody";
import Footer from "../../pages/footer/Footer";
import ScrollBtn from "../scrollBtn/ScrollBtn";
function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  return (
    <>
      <Header />
      <Banner />
      <MainBody />
      <Footer />
      <ScrollBtn scrollIt={scroll} />
    </>
  );
}

export default Home;

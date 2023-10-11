import React from "react";
import Footer from "../components/Footer";
import HomeHeader from "../components/Home/HomeHeader";
import HomeHero from "../components/Home/HomeHero";
import HomeHeroFour from "../components/Home/HomeHeroFour";
import HomeHeroReproductor from "../components/Home/HomeHeroReproductor";
import HomeHeroReproductorTwo from "../components/Home/HomeHeroReproductorTwo";
import HomeHeroThree from "../components/Home/HomeHeroThree";
import { useSelector } from "react-redux";

type Props = {};

const Home = (props: Props) => {

  return (
    <>
      <HomeHeader />
      <div className="mx-auto max-w-[1300px]">
        <HomeHero />
        <HomeHeroReproductor />
        <HomeHeroReproductorTwo />
        <HomeHeroThree />
        <HomeHeroFour />
      </div>

      <Footer />
    </>
  );
};

export default Home;

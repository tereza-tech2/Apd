import React from "react";
import Header from "../components/Commons/Header";
import SeeProduct from "../components/Commons/SeeProduct";
import { useSelector } from "react-redux";
import HomeHero from "../components/Home/HomeHero";
import Footer from "../components/Footer";
import HomeHeroFour from "../components/Home/HomeHeroFour";

type Props = {};

const Reproductors = (props: Props) => {
  const articles = useSelector((store: any) => {
    return store.reducerArticles;
  });
  return (
    <>
      <Header pageTitle="Reproductors" />
      <div className="space-y-8 max-w-[1300px] mx-auto">
        <SeeProduct
          title={articles[4]?.title}
          alt={articles[4]?.alt}
          description={articles[4]?.description}
          img={articles[4]?.img}
          link="/Reproductors/zx9"
          direction="md:flex-row"
        />
        <SeeProduct
          title={articles[3]?.title}
          alt={articles[3]?.alt}
          description={articles[3]?.description}
          img={articles[3]?.img}
          link="/Reproductors/zx7"
          direction="md:flex-row-reverse"
        />
        <HomeHero />
        <HomeHeroFour />
      </div>
      <Footer />
    </>
  );
};

export default Reproductors;

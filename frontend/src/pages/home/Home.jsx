import React from "react";
import {
  BestDeels,
  Categories,
  Events,
  FeaturedProducts,
  Footer,
  Header,
  Hero,
  Sponsores,
} from "../../routes/Routers";

const Home = () => {
  return (
    <>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeels />
      <Events />
      <FeaturedProducts />
      <Sponsores />
      <Footer />
    </>
  );
};

export default Home;

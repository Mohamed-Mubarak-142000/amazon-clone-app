import React from "react";
import { Footer, Header } from "../../routes/Routers";
import Faq from "../../components/Faq/Faq";

const FaqPage = () => {
  return (
    <>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </>
  );
};

export default FaqPage;

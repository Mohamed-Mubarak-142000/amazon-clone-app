import React from "react";
import { Events, Footer, Header } from "../../routes/Routers";
import styles from "../../styles/styles";

const EventsPage = () => {
  return (
    <>
      <Header activeHeading={4} />
      <br />
      <Events />
      <Footer />
    </>
  );
};

export default EventsPage;

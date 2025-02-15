import React from "react";
import { Navbar } from "../NavBar";
import {Footer} from "../Footer";


const PublicPageLayout = (Component) => {
  return (props) => (
    <>
      <Navbar />
      <Component {...props} />
      <Footer />
    </>
  );
};

export default PublicPageLayout;

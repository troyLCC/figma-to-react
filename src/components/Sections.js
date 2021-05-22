import React, { Fragment } from "react";
import Steps from "./Steps";
import Story from "./Story";
import Product from "./Product"

import AllCards from "./AllCards";

const Sections = () => {
  return (
    <Fragment>
      <Steps />
      <AllCards />
      <Story />
      <Product />
    </Fragment>
  );
};

export default Sections;

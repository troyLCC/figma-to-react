import React, { Fragment } from "react";
import Steps from "./Steps";
import Story from "./Story";

import AllCards from "./AllCards";

const Sections = () => {
  return (
    <Fragment>
      <Steps />
      <AllCards />
      <Story />
    </Fragment>
  );
};

export default Sections;

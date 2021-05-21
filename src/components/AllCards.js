import React from "react";
import classes from "./AllCards.module.css";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import StepCard from "./StepCard";

const AllCards = () => {
  return (
    <div className={classes.allcard_container}>
      <StepCard
        number="01"
        title="Personalise"
        para="Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!"
        img={card1}
        customstyle={false}
      />
      <StepCard
        className={classes.padding_top}
        number="02"
        title="Write &amp; understand"
        para="Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!"
        img={card2}
        customstyle={true}
      />
      <StepCard
        className={classes.top_padding}
        number="03"
        title="Alivio"
        para="Now you are aware, and have a way to manage and overcome your own stress.
What are you waiting for? Alivio today!"
        img={card3}
        customstyle={false}
      />
    </div>
  );
};

export default AllCards;

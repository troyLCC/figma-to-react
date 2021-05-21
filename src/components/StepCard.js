import React from "react";
import classes from "./StepCard.module.css";
import card1 from "../img/card1.png";

const StepCard = (props) => {
  const cardContainer = classes.card_container;
  const topMargin = classes.top_margin;
  return (
    <div
      className={
        props.customstyle ? `${cardContainer} ${topMargin} ` : cardContainer
      }
    >
      <div className={classes.wrapper}>
        <div className={classes.step}>
          <p className={classes.number}>{props.number}</p>
          <p className={classes.text}>{props.title}</p>
        </div>
        <div className={classes.paragraph}>
          <p>{props.para}</p>
        </div>
        <div>
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StepCard;

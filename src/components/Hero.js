import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero_section}>
      <div className={classes.hero_text}>
        <h1>
          Be aware, <br></br> Manage Well.
        </h1>
        <p>
          Lorem ipsum dolor sit, amet cons<br></br>
          ectetur adipisicing elit. Neque eveniet <br></br>nulla sequi
          cupiditate quaerat tempora <br></br>
        </p>
        <button>Find Your Way</button>
      </div>
    </section>
  );
};

export default Hero;

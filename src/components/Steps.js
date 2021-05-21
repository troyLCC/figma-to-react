import React from "react";
import classes from "./Step.module.css";
import "../App.css";

const Steps = () => {
  return (
    <section className="container">
      <article className={classes.steps_headings}>
        <div>
          <h2>How it works</h2>
          <h1>Understand &amp; Release the stress in 3 steps</h1>
        </div>
        <div>
          <p>
            Alivio offers as many journals it takes, tackling different areas
            such as anxiety, overwhelmedness, sadness, or anger, and a variety
            of personal causes, to help you become aware of your emotions, and
            guide you in how to manage stress.
          </p>
        </div>
      </article>
      <article></article>
    </section>
  );
};

export default Steps;

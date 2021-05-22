import React from "react";
import classes from "./Story.module.css";
import video from "../img/video.png";

const Story = () => {
  return (
    <section className={classes.story}>
      <div className={classes.stroy_text}>
        <h2>
          Let's hear about <br></br>Kayla's success story
        </h2>
        <p>See how well Alivio works in a real customer’s life. </p>
        <button>Let's Get Started</button>
      </div>
      <div>
        <img src={video} alt="" />
      </div>
    </section>
  );
};

export default Story;

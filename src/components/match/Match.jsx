import React from "react";
import Team from "../team/Team";
import classes from "./Match.module.scss";

const Match = (props) => {
  const { match } = props;
  return (
    <div>
      <div className={classes.match}>
        <div className={classes.header}></div>
        <div className={classes.content}>
          {match.map((item) => (
            <Team {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Match;

import React from "react";
import Team from "../team/Team";
import classes from "./Match.module.scss";

const Match = (props) => {
  const { match, matchIndex = 0, chooseWinner, stage } = props;
  return (
    <div>
      <div className={classes.match}>
        <div className={classes.header}></div>
        <div className={classes.content}>
          {match.map((item) => (
            <Team
              key={item.id}
              {...item}
              onClick={() => chooseWinner(stage, matchIndex, item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Match;

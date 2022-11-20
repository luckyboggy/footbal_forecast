import React from "react";
import classes from "./Team.module.scss";

const Team = (props) => {
  const { team = "не определено", flag, win } = props;
  return (
    <div className={`${classes.team} ${win ? classes.teamWinner : ''}`} {...props}>
      <img src={flag} className={classes.team__flag} alt={""} />
      {team}
    </div>
  );
};

export default Team;

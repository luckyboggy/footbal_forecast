import React from "react";
import classes from "./Team.module.scss";

const Team = (props) => {
  const { team, flag } = props;
  return (
    <div className={classes.team} {...props}>
      {/* <img src={flag} className={classes.team__flag}/> */}
      {team}
    </div>
  );
};

export default Team;

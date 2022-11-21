import React from "react";
import classes from "./Full.module.scss";

const Full = (props) => {
  const { result } = props;
  return (
    <div className={classes.fullResult}>
      <div className={classes.stage}>
        1/8
        {result.roundOf16.map((pair) => (
          <div className={classes.match_16}>
            <div
              className={`${classes.team} ${
                pair[0].win ? classes.teamWinner : ""
              }`}
            >
              <img src={pair[0].flag} className={classes.team__flag} alt={""} />
              <p className={classes.team__name}>{pair[0].team.slice(0, 3)}</p>
            </div>

            <div
              className={`${classes.team} ${
                pair[1].win ? classes.teamWinner : ""
              }`}
            >
              <img src={pair[1].flag} className={classes.team__flag} alt={""} />
              <p className={classes.team__name}>{pair[1].team.slice(0, 3)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.stage}>
        1/4
        {result.quarterfinals.map((pair) => (
          <div className={classes.match_qf}>
            <div
              className={`${classes.team} ${
                pair[0].win ? classes.teamWinner : ""
              }`}
            >
              <img src={pair[0].flag} className={classes.team__flag} alt={""} />
              <p className={classes.team__name}>{pair[0].team.slice(0, 3)}</p>
            </div>

            <div
              className={`${classes.team} ${
                pair[1].win ? classes.teamWinner : ""
              }`}
            >
              <img src={pair[1].flag} className={classes.team__flag} alt={""} />
              <p className={classes.team__name}>{pair[1].team.slice(0, 3)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.stage}>
        1/2
        {result.semifinals.map((pair) => (
          <div className={classes.match_sf}>
            <div
              className={`${classes.team} ${
                pair[0].win ? classes.teamWinner : ""
              }`}
            >
              <img src={pair[0].flag} className={classes.team__flag} alt={""} />
              <p className={classes.team__name}>{pair[0].team.slice(0, 3)}</p>
            </div>

            <div
              className={`${classes.team} ${
                pair[1].win ? classes.teamWinner : ""
              }`}
            >
              <img src={pair[1].flag} className={classes.team__flag} alt={""} />
              <p className={classes.team__name}>{pair[1].team.slice(0, 3)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.stage}>
        Финал
        {result.final.map((pair) => (
          <div className={classes.match_final}>
            <div
              className={`${classes.team} ${
                pair[0].win ? classes.teamWinner : ""
              }`}
            >
              <img src={pair[0].flag} className={classes.team__flag} alt={""} />
              <p className={classes.team__name}>{pair[0].team.slice(0, 3)}</p>
            </div>

            <div className={classes.team}>
              <img src={pair[1].flag} className={classes.team__flag} alt={""} />
              <p className={classes.team__name}>{pair[1].team.slice(0, 3)}</p>
            </div>
          </div>
        ))}
        {result.thirdPlace.map((pair) => (
          <div className={classes.match_third}>
            <div
              className={`${classes.team} ${
                pair[0].win ? classes.teamWinner : ""
              }`}
            >
              <img src={pair[0].flag} className={classes.team__flag} alt={""} />
              <p className={classes.team__name}>{pair[0].team.slice(0, 3)}</p>
            </div>
            <div className={classes.team}>
              <img src={pair[1].flag} className={classes.team__flag} alt={""} />
              <p className={classes.team__name}>{pair[1].team.slice(0, 3)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Full;

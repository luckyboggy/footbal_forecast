import React from 'react';
import classes from './Team.module.scss';

const Team = (props) => {
    const {team} = props;
    return (
        <div className={classes.team} >
            {team}
        </div>
    );
};

export default Team;
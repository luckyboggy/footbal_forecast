import React, {useState} from 'react';
import classes from './Group.module.scss';
import Team from '../team/Team';

const Group = () => {
    const [group, setGroup] = useState([
        {id: 1, team: 'Катар'},
        {id: 2, team: 'Эквадор'},
        {id: 3, team: 'Сенегал'},
        {id: 4, team: 'Нидерланды'},
    ]);

    
    return (
        <div className={classes.group}>
            <div className={classes.header}>Group A</div>
            <div className={classes.content}>
                {
                    group.map(item => (
                        <Team  {...item} key={item.id} />
                    ))
                }
            </div>
            
        </div>
    );
};

export default Group;
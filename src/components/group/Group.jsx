import React from "react";
import { Reorder } from "framer-motion";
import classes from "./Group.module.scss";
import Team from "../team/Team";

const Group = (props) => {
  const { groupName, group, setGroup } = props;

  return (
    <div className={classes.group}>
      <div className={classes.header}>Group {groupName}</div>
      <Reorder.Group
        axis="y"
        values={group}
        onReorder={setGroup}
        className={classes.content}
      >
        {group.map((item) => (
          <Reorder.Item key={item.id} value={item}>
            <Team {...item} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default Group;

import React, { useState } from "react";
import { Reorder } from "framer-motion";
import classes from "./Group.module.scss";
import Team from "../team/Team";

const Group = () => {
  const [group, setGroup] = useState([
    {
      id: 1,
      team: "Катар",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_katar_new.jpg",
    },
    {
      id: 2,
      team: "Эквадор",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ekvador_new.jpg",
    },
    {
      id: 3,
      team: "Сенегал",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_senegal_enl.jpg",
    },
    {
      id: 4,
      team: "Нидерланды",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_niderlandy_enl.jpg",
    },
  ]);

  return (
    <div className={classes.group}>
      <div className={classes.header}>Group A</div>
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

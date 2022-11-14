import React, { useState } from "react";
import Group from "./components/group/Group";


function App() {
  const [groupA, setGroupA] = useState([
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
  const [groupB, setGroupB] = useState([
    {
      id: 1,
      team: "Англия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_katar_new.jpg",
    },
    {
      id: 2,
      team: "Иран",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ekvador_new.jpg",
    },
    {
      id: 3,
      team: "США",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_senegal_enl.jpg",
    },
    {
      id: 4,
      team: "Уэльс",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_niderlandy_enl.jpg",
    },
  ]);
  const [groupC, setGroupC] = useState([
    {
      id: 1,
      team: "Аргентина",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_katar_new.jpg",
    },
    {
      id: 2,
      team: "Саудовская Аравия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ekvador_new.jpg",
    },
    {
      id: 3,
      team: "Мексика",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_senegal_enl.jpg",
    },
    {
      id: 4,
      team: "Польша",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_niderlandy_enl.jpg",
    },
  ]);
  const [groupD, setGroupD] = useState([
    {
      id: 1,
      team: "Франция",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_katar_new.jpg",
    },
    {
      id: 2,
      team: "Австралия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ekvador_new.jpg",
    },
    {
      id: 3,
      team: "Дания",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_senegal_enl.jpg",
    },
    {
      id: 4,
      team: "Тунис",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_niderlandy_enl.jpg",
    },
  ]);


  return (
    <div className="App">
      <div className="groupStage">
        <Group groupName={"A"} group={groupA} setGroup={setGroupA} />
        <Group groupName={"B"} group={groupB} setGroup={setGroupB} />
        <Group groupName={"C"} group={groupC} setGroup={setGroupC} />
        <Group groupName={"D"} group={groupD} setGroup={setGroupD} />
      </div>
      <button className="next_btn">Следующий этап</button>
    </div>
  );
}

export default App;

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

  const [stage, setStage] = useState('group');


  const toRoundOf16 = () => {
    setStage('round of 16');
  }

  const toQuarterfinals = () => {
    setStage('quarterfinals');
  }

  const toSemifinals = () => {
    setStage('semifinals');
  }

  const toThirdPlace = () => {
    setStage('third place');
  }

  const toFinal = () => {
    setStage('final');
  }



  return (
    <div className="App">
      {
        (stage === 'group') && <div className="groupStage">
          <div className="groupStage__header"></div>
          <div className="groupStage__content">
            <Group groupName={"A"} group={groupA} setGroup={setGroupA} />
            <Group groupName={"B"} group={groupB} setGroup={setGroupB} />
            <Group groupName={"C"} group={groupC} setGroup={setGroupC} />
            <Group groupName={"D"} group={groupD} setGroup={setGroupD} />
            <Group groupName={"A"} group={groupA} setGroup={setGroupA} />
            <Group groupName={"B"} group={groupB} setGroup={setGroupB} />
            <Group groupName={"C"} group={groupC} setGroup={setGroupC} />
            <Group groupName={"D"} group={groupD} setGroup={setGroupD} />
          </div>
          <button className="nextStageBtn" onClick={toRoundOf16}>Следующий этап</button>
        </div>
      }
      {
        (stage === 'round of 16') && <div className="roundOfSixteen">Round of sixteen</div>
      }
      {
        (stage === 'quarterfinals') && <div className="quarterfinals">Quarterfinals</div>
      }
      {
        (stage === 'semifinals') && <div className="semifinals">Semifinals</div>
      }
      {
        (stage === 'third place') && <div className="thirdPlace">Third place</div>
      }
      {
        (stage === 'final') && <div className="final">Final</div>
      }

    </div>
  );
}

export default App;

import React, { useState } from "react";
import Group from "./components/group/Group";
import Match from "./components/match/Match";


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
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_england1.jpg",
    },
    {
      id: 2,
      team: "Иран",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_iran_new.jpg",
    },
    {
      id: 3,
      team: "США",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_usa_enl.jpg",
    },
    {
      id: 4,
      team: "Уэльс",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_wales.jpg",
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
  const [groupE, setGroupE] = useState([
    {
      id: 1,
      team: "Испания",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_katar_new.jpg",
    },
    {
      id: 2,
      team: "Коста-Рика",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ekvador_new.jpg",
    },
    {
      id: 3,
      team: "Германия",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_senegal_enl.jpg",
    },
    {
      id: 4,
      team: "Япония",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_niderlandy_enl.jpg",
    },
  ]);
  const [groupF, setGroupF] = useState([
    {
      id: 1,
      team: "Бельгия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_katar_new.jpg",
    },
    {
      id: 2,
      team: "Канада",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ekvador_new.jpg",
    },
    {
      id: 3,
      team: "Марокко",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_senegal_enl.jpg",
    },
    {
      id: 4,
      team: "Хорватия",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_niderlandy_enl.jpg",
    },
  ]);
  const [groupG, setGroupG] = useState([
    {
      id: 1,
      team: "Бразилия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_katar_new.jpg",
    },
    {
      id: 2,
      team: "Сербия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ekvador_new.jpg",
    },
    {
      id: 3,
      team: "Швейцария",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_senegal_enl.jpg",
    },
    {
      id: 4,
      team: "Камерун",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_niderlandy_enl.jpg",
    },
  ]);
  const [groupH, setGroupH] = useState([
    {
      id: 1,
      team: "Португалия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_katar_new.jpg",
    },
    {
      id: 2,
      team: "Гана",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ekvador_new.jpg",
    },
    {
      id: 3,
      team: "Уругвай",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_senegal_enl.jpg",
    },
    {
      id: 4,
      team: "Республика Корея",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_niderlandy_enl.jpg",
    },
  ]);

  const [stage, setStage] = useState('group');
  //const [stage, setStage] = useState('round of 16');

  const [result, setResult] = useState({
    roundOf16: [],
    quarterfinals: [],
    semifinals: [],
    therdPlace: {},
    final: {},
  })


  const toRoundOf16 = () => {
    setStage('round of 16');
    let _roundOf16 = [
      [{ ...groupA[0], id: 1 }, { ...groupB[1], id: 2 }],
      [{ ...groupC[0], id: 1 }, { ...groupD[1], id: 2 }],
      [{ ...groupE[0], id: 1 }, { ...groupF[1], id: 2 }],
      [{ ...groupG[0], id: 1 }, { ...groupH[1], id: 2 }],
      [{ ...groupB[0], id: 1 }, { ...groupA[1], id: 2 }],
      [{ ...groupD[0], id: 1 }, { ...groupC[1], id: 2 }],
      [{ ...groupF[0], id: 1 }, { ...groupE[1], id: 2 }],
      [{ ...groupH[0], id: 1 }, { ...groupG[1], id: 2 }],
    ];
    setResult({ ...result, roundOf16: _roundOf16 })
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

  const printResolt = () => {
    console.log(result);
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
            <Group groupName={"E"} group={groupE} setGroup={setGroupE} />
            <Group groupName={"F"} group={groupF} setGroup={setGroupF} />
            <Group groupName={"G"} group={groupG} setGroup={setGroupG} />
            <Group groupName={"H"} group={groupH} setGroup={setGroupH} />
          </div>
          <button className="nextStageBtn" onClick={toRoundOf16}>Далее</button>
        </div>
      }
      {
        (stage === 'round of 16') && <div className="roundOfSixteen">
          <div className="roundOfSixteen__header"></div>
          <div className="roundOfSixteen__content">
            {
              result.roundOf16.map(match => (
                <Match match={match} />
              ))
            }
          </div>
          <div className="roundOfSixteen__buttons">
            <button className="prevStageBtn" onClick={() => setStage('group')}>Назад</button>
            <button className="nextStageBtn" onClick={toQuarterfinals}>Далее</button>
          </div>
          <button onClick={printResolt}>результаты</button>
        </div>
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

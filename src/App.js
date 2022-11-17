import React, { useState } from "react";
import Group from "./components/group/Group";
import Match from "./components/match/Match";


function App() {
  const [groupA, setGroupA] = useState([
    {
      id: 0,
      team: "Катар",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_katar_new.jpg",
    },
    {
      id: 1,
      team: "Эквадор",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ekvador_new.jpg",
    },
    {
      id: 2,
      team: "Сенегал",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_senegal_enl.jpg",
    },
    {
      id: 3,
      team: "Нидерланды",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_niderlandy_enl.jpg",
    },
  ]);
  const [groupB, setGroupB] = useState([
    {
      id: 0,
      team: "Англия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_england1.jpg",
    },
    {
      id: 1,
      team: "Иран",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_iran_new.jpg",
    },
    {
      id: 2,
      team: "США",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_usa_enl.jpg",
    },
    {
      id: 3,
      team: "Уэльс",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_wales.jpg",
    },
  ]);
  const [groupC, setGroupC] = useState([
    {
      id: 0,
      team: "Аргентина",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_argentina_enl.jpg",
    },
    {
      id: 1,
      team: "Саудовская Аравия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_saudovskaja_aravija_new.jpg",
    },
    {
      id: 2,
      team: "Мексика",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_meksika_new.jpg",
    },
    {
      id: 3,
      team: "Польша",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_polsha_enl.jpg",
    },
  ]);
  const [groupD, setGroupD] = useState([
    {
      id: 0,
      team: "Франция",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_frantsija_new.jpg",
    },
    {
      id: 1,
      team: "Австралия",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_avstraliya_enl.jpg",
    },
    {
      id: 2,
      team: "Дания",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_danija_enl.jpg",
    },
    {
      id: 3,
      team: "Тунис",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_tunis_new.jpg",
    },
  ]);
  const [groupE, setGroupE] = useState([
    {
      id: 0,
      team: "Испания",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_ispanija_new.jpg",
    },
    {
      id: 1,
      team: "Коста-Рика",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_kosta_rika_new.jpg",
    },
    {
      id: 2,
      team: "Германия",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_germanija_enl.jpg",
    },
    {
      id: 3,
      team: "Япония",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_japonija_enl.jpg",
    },
  ]);
  const [groupF, setGroupF] = useState([
    {
      id: 0,
      team: "Бельгия",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_belgija_enl.jpg",
    },
    {
      id: 1,
      team: "Канада",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_kanada_new.jpg",
    },
    {
      id: 2,
      team: "Марокко",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_marokko_new.jpg",
    },
    {
      id: 3,
      team: "Хорватия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_horvatija_new.jpg",
    },
  ]);
  const [groupG, setGroupG] = useState([
    {
      id: 0,
      team: "Бразилия",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_brazilija_enl.jpg",
    },
    {
      id: 1,
      team: "Сербия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_serbija_new.jpg",
    },
    {
      id: 2,
      team: "Швейцария",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_shvejtsarija_new.jpg",
    },
    {
      id: 3,
      team: "Камерун",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_kamerun_enl.jpg",
    },
  ]);
  const [groupH, setGroupH] = useState([
    {
      id: 0,
      team: "Португалия",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_portugalija_new.jpg",
    },
    {
      id: 1,
      team: "Гана",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_gana_enl.jpg",
    },
    {
      id: 2,
      team: "Уругвай",
      flag: "https://www.megaflag.ru/sites/default/files/images/shop/products/flag_urugvaj_new.jpg",
    },
    {
      id: 3,
      team: "Республика Корея",
      flag: "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_juznaja_koreja_enl.jpg",
    },
  ]);

  const [stage, setStage] = useState('group');
  //const [stage, setStage] = useState('round of 16');

  const [result, setResult] = useState({
    roundOf16: [],
    quarterfinals: [[{}, {}], [{}, {}], [{}, {}], [{}, {}]],
    semifinals: [[{}, {}], [{}, {}]],
    thirdPlace: [[{}, {}]],
    final: [[{}, {}]],
  })


  const toRoundOf16 = () => {
    let _roundOf16 = [
      [{ ...groupA[0], id: 0, win: 0 }, { ...groupB[1], id: 1, win: 0 }],
      [{ ...groupC[0], id: 0, win: 0 }, { ...groupD[1], id: 1, win: 0 }],
      [{ ...groupE[0], id: 0, win: 0 }, { ...groupF[1], id: 1, win: 0 }],
      [{ ...groupG[0], id: 0, win: 0 }, { ...groupH[1], id: 1, win: 0 }],
      [{ ...groupB[0], id: 0, win: 0 }, { ...groupA[1], id: 1, win: 0 }],
      [{ ...groupD[0], id: 0, win: 0 }, { ...groupC[1], id: 1, win: 0 }],
      [{ ...groupF[0], id: 0, win: 0 }, { ...groupE[1], id: 1, win: 0 }],
      [{ ...groupH[0], id: 0, win: 0 }, { ...groupG[1], id: 1, win: 0 }],
    ];
    setResult({ ...result, roundOf16: _roundOf16 });
    setStage('round of 16');
  }

  const toQuarterfinals = () => {
    let winners = result.roundOf16.map(pair => {
      let win = pair.filter(i => i.win === 1);
      return win;
    })
    let _quarterfinals = [
      [{ ...winners[0][0], id: 0, win: 0 }, { ...winners[1][0], id: 1, win: 0 }],
      [{ ...winners[2][0], id: 0, win: 0 }, { ...winners[3][0], id: 1, win: 0 }],
      [{ ...winners[4][0], id: 0, win: 0 }, { ...winners[5][0], id: 1, win: 0 }],
      [{ ...winners[6][0], id: 0, win: 0 }, { ...winners[7][0], id: 1, win: 0 }],
    ]
    setResult({ ...result, quarterfinals: _quarterfinals })
  }

  const toSemifinals = () => {
    let winners = result.quarterfinals.map(pair => {
      let win = pair.filter(i => i.win === 1);
      return win;
    })
    let _semifinals = [
      [{ ...winners[0][0], id: 0, win: 0 }, { ...winners[1][0], id: 1, win: 0 }],
      [{ ...winners[2][0], id: 0, win: 0 }, { ...winners[3][0], id: 1, win: 0 }],
    ]
    setResult({ ...result, semifinals: _semifinals })
  }

  const toThirdPlace = () => {
    let losers = result.semifinals.map(pair => {
      let lose = pair.filter(i => i.win === 0);
      return lose
    })
    console.log('loserssss', losers);
    let _thirdPlace = [
      [{ ...losers[0][0], id: 0, win: 0 }, { ...losers[1][0], id: 1, win: 0 }],
    ]
    console.log('losers', _thirdPlace);
    //setResult({...result, thirdPlace: _thirdPlace });
  }

  const toFinal = () => {
    let losers = result.semifinals.map(pair => {
      let lose = pair.filter(i => i.win === 0);
      return lose
    })
    console.log('loserssss', losers);
    let _thirdPlace = [
      [{ ...losers[0][0], id: 0, win: 0 }, { ...losers[1][0], id: 1, win: 0 }],
    ]
    console.log('losers', _thirdPlace);
    //setResult({ ...result, thirdPlace: _thirdPlace});


    let winners = result.semifinals.map(pair => {
      let win = pair.filter(i => i.win === 1);
      return win
    })
    console.log(winners);
    let _final = [
      [{ ...winners[0][0], id: 0, win: 0 }, { ...winners[1][0], id: 1, win: 0 }],
    ]
    console.log('winners', _final);
    setResult({ ...result, final: _final, thirdPlace: _thirdPlace });

  }


  const chooseWinner = (stage, matchWinner, winnerId) => {
    if (stage === 'sexteen') {
      result.roundOf16[matchWinner][0].win = 0;
      result.roundOf16[matchWinner][1].win = 0;
      result.roundOf16[matchWinner][winnerId].win = 1;
      toQuarterfinals();
    }
    if (stage === 'qf') {
      result.quarterfinals[matchWinner][0].win = 0;
      result.quarterfinals[matchWinner][1].win = 0;
      result.quarterfinals[matchWinner][winnerId].win = 1;
      toSemifinals();
    }
    if (stage === 'sf') {
      result.semifinals[matchWinner][0].win = 0;
      result.semifinals[matchWinner][1].win = 0;
      result.semifinals[matchWinner][winnerId].win = 1;
      //toThirdPlace();
      toFinal();

    }
    if (stage === 'third') {

      result.thirdPlace[matchWinner][0].win = 0;
      result.thirdPlace[matchWinner][1].win = 0;
      result.thirdPlace[matchWinner][winnerId].win = 1;


    }
    if (stage === 'final') {

      result.final[matchWinner][0].win = 0;
      result.final[matchWinner][1].win = 0;
      result.final[matchWinner][winnerId].win = 1;

    }

  }

  const printResult = () => {
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
        (stage === 'round of 16') && <div className="playOff">
          <div className="playOff__header"></div>
          <div className="playOff__content">
            {
              result.roundOf16.map((match, index) => (
                <Match key={index} match={match} matchIndex={index} chooseWinner={chooseWinner} stage={'sexteen'} />
              ))
            }
          </div>
          <div className="playOff__buttons">
            <button className="prevStageBtn" onClick={() => setStage('group')}>Назад</button>
            <button className="nextStageBtn" onClick={() => setStage('quarterfinals')}>Далее</button>
          </div>
          <button onClick={printResult}>результаты</button>
        </div>
      }
      {
        (stage === 'quarterfinals') && <div className="playOff">
          <div className="playOff__header"></div>
          <div className="playOff__content">
            {
              result.quarterfinals.map((match, index) => (
                <Match key={index} match={match} matchIndex={index} chooseWinner={chooseWinner} stage={'qf'} />
              ))
            }
          </div>
          <div className="playOff__buttons">
            <button className="prevStageBtn" onClick={() => setStage('round of 16')}>Назад</button>
            <button className="nextStageBtn" onClick={() => setStage('semifinals')}>Далее</button>
          </div>
          {/* <button onClick={printResult}>результаты</button> */}
        </div>
      }
      {
        (stage === 'semifinals') && <div className="playOff">
          <div className="playOff__header"></div>
          <div className="playOff__content">
            {
              result.semifinals.map((match, index) => (
                <Match key={index} match={match} matchIndex={index} chooseWinner={chooseWinner} stage={'sf'} />
              ))
            }
          </div>
          <div className="playOff__buttons">
            <button className="prevStageBtn" onClick={() => setStage('quarterfinals')}>Назад</button>
            <button className="nextStageBtn" onClick={() => setStage('third place')}>Далее</button>
          </div>
          {/* <button onClick={printResult}>результаты</button> */}
        </div>
      }
      {
        (stage === 'third place') && <div className="playOff">
          <div className="playOff__header"></div>
          <div className="playOff__content">
            {
              result.thirdPlace.map((match, index) => (
                <Match key={index} match={match} matchIndex={index} chooseWinner={chooseWinner} stage={'third'} />
              ))
            }
          </div>
          <div className="playOff__buttons">
            <button className="prevStageBtn" onClick={() => setStage('semifinals')}>Назад</button>
            <button className="nextStageBtn" onClick={() => setStage('final')}>Далее</button>
          </div>
          {/* <button onClick={printResult}>результаты</button> */}
        </div>
      }
      {
        (stage === 'final') && <div className="playOff">
          <div className="fplayOff__header"></div>
          <div className="playOff__content">
            {
              result.final.map((match, index) => (
                <Match key={index} match={match} matchIndex={index} chooseWinner={chooseWinner} stage={'final'} />
              ))
            }
          </div>
          <div className="playOff__buttons">
            <button className="prevStageBtn" onClick={() => setStage('third place')}>Назад</button>
            <button className="nextStageBtn" onClick={() => setStage('toresult')}>Далее</button>
          </div>
          <button onClick={printResult}>результаты</button>
        </div>
      }

    </div >
  );
}

export default App;

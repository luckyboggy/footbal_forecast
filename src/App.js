import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Full from "./components/full/Full";
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

  const [result, setResult] = useState({
    roundOf16: [],
    quarterfinals: [[{}, {}], [{}, {}], [{}, {}], [{}, {}]],
    semifinals: [[{}, {}], [{}, {}]],
    thirdPlace: [[{}, {}]],
    final: [[{}, {}]],
    winners: [{}, {}, {}, {}]
  });

  const [resultShow, setResultShow] = useState(false);

  const [data, setData] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/todos/';

  // get api
  /* useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json);
        console.log(data);
      })
      .catch(err => {
        console.log('err', err)
      })

  }, []); */

  // post and put api
  const postResult = () => {
    const data = {
      id: Date.now(),
      name: 'Bogdan',
      mobile: '12123432'
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log('response', response)
      })
      .catch(err => {
        console.log('err', err)
      })
  }



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
    setResult({ ...result, quarterfinals: _quarterfinals });
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
    setResult({ ...result, semifinals: _semifinals });
  }


  const toFinal = () => {
    let losers = result.semifinals.map(pair => {
      let lose = pair.filter(i => i.win === 0);
      return lose;
    })
    let _thirdPlace = [
      [
        (result.semifinals[0][0].win !== result.semifinals[0][1].win) ? { ...losers[0][0], id: 0, win: 0 } : {},
        (result.semifinals[1][0].win !== result.semifinals[1][1].win) ? { ...losers[1][0], id: 1, win: 0 } : []
      ],
    ]

    let winners = result.semifinals.map(pair => {
      let win = pair.filter(i => i.win === 1);
      return win;
    })

    let _final = [
      [{ ...winners[0][0], id: 0, win: 0 }, { ...winners[1][0], id: 1, win: 0 }],
    ]

    setResult({ ...result, final: _final, thirdPlace: _thirdPlace });
  }

  const thirdPlaceMatch = () => {
    let _winners = result.winners;
    result.thirdPlace[0].forEach(item => {
      if (item.win === 1) {
        _winners[2] = item;
      } else {
        _winners[3] = item;
      }
    });
    setResult({ ...result, winners: _winners });
  }

  const finalMatch = () => {
    let _winners = result.winners;
    result.final[0].forEach(item => {
      if (item.win === 1) {
        _winners[0] = item;
      } else {
        _winners[1] = item;
      }
    });
    setResult({ ...result, winners: _winners });
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
      toFinal();
    }
    if (stage === 'third') {
      result.thirdPlace[matchWinner][0].win = 0;
      result.thirdPlace[matchWinner][1].win = 0;
      result.thirdPlace[matchWinner][winnerId].win = 1;
      thirdPlaceMatch();
    }
    if (stage === 'final') {

      result.final[matchWinner][0].win = 0;
      result.final[matchWinner][1].win = 0;
      result.final[matchWinner][winnerId].win = 1;
      finalMatch();
    }
  }

  const checkAllWinners = (arr) => {
    let countWin = 0;
    arr.forEach(pair => {
      pair.forEach(item => {
        if (item.win === 1) {
          countWin += 1;
        }
      })
    });
    console.log(countWin);
    console.log(arr.length);

    if (countWin === arr.length) {
      return true;
    }
    return false;
  }

  const printResult = () => {
    console.log(result);
  }

  const toTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <div className="App">
      {
        (stage === 'group') && <div className="groupStage">
          <div className="groupStage__header">Групповой этап</div>
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
          <button className="nextStageBtn" onClick={() => { toRoundOf16(); toTop() }}>Далее</button>
        </div>
      }
      {
        (stage === 'round of 16') && <div className="playOff">
          <div className="playOff__header">1/8 финала</div>
          <div className="playOff__content">
            {
              result.roundOf16.map((match, index) => (
                <Match key={index} match={match} matchIndex={index} chooseWinner={chooseWinner} stage={'sexteen'} />
              ))
            }
          </div>
          <div className="playOff__buttons">
            <button className="prevStageBtn" onClick={() => { setStage('group'); toTop() }}>Назад</button>
            {
              checkAllWinners(result.roundOf16)
                ? <button className="nextStageBtn" onClick={() => { setStage('quarterfinals'); toTop() }}>Далее</button>
                : <button className="fakeBtn" >Не все победители выбраны</button>
            }

          </div>
        </div>
      }
      {
        (stage === 'quarterfinals') && <div className="playOff">
          <div className="playOff__header">Четвертьфиналы</div>
          <div className="playOff__content">
            {
              result.quarterfinals.map((match, index) => (
                <Match key={index} match={match} matchIndex={index} chooseWinner={chooseWinner} stage={'qf'} />
              ))
            }
          </div>
          <div className="playOff__buttons">
            <button className="prevStageBtn" onClick={() => { setStage('round of 16'); toTop() }}>Назад</button>
            {
              checkAllWinners(result.quarterfinals)
                ? <button className="nextStageBtn" onClick={() => { setStage('semifinals'); toTop() }}>Далее</button>
                : <button className="fakeBtn" >Не все победители выбраны</button>
            }

          </div>
        </div>
      }
      {
        (stage === 'semifinals') && <div className="playOff">
          <div className="playOff__header">Полуфиналы</div>
          <div className="playOff__content">
            {
              result.semifinals.map((match, index) => (
                <Match key={index} match={match} matchIndex={index} chooseWinner={chooseWinner} stage={'sf'} />
              ))
            }
          </div>
          <div className="playOff__buttons">
            <button className="prevStageBtn" onClick={() => { setStage('quarterfinals'); toTop() }}>Назад</button>
            {
              checkAllWinners(result.semifinals)
                ? <button className="nextStageBtn" onClick={() => { setStage('third place'); toTop() }}>Далее</button>
                : <button className="fakeBtn" >Не все победители выбраны</button>
            }
          </div>
        </div>
      }
      {
        (stage === 'third place') && <div className="playOff">
          <div className="playOff__header">Матч за 3 место</div>
          <div className="playOff__content">
            {
              result.thirdPlace.map((match, index) => (
                <Match key={index} match={match} matchIndex={index} chooseWinner={chooseWinner} stage={'third'} />
              ))
            }
          </div>
          <div className="playOff__buttons">
            <button className="prevStageBtn" onClick={() => { setStage('semifinals'); toTop() }}>Назад</button>
            {
              checkAllWinners(result.thirdPlace)
                ? <button className="nextStageBtn" onClick={() => { setStage('final'); toTop() }}>Далее</button>
                : <button className="fakeBtn" >Победитель не выбран</button>
            }

          </div>
        </div>
      }
      {
        (stage === 'final') && <div className="playOff">
          <div className="playOff__header">Финал</div>
          <div className="playOff__content">
            {
              result.final.map((match, index) => (
                <Match key={index} match={match} matchIndex={index} chooseWinner={chooseWinner} stage={'final'} />
              ))
            }
          </div>
          <div className="playOff__buttons">
            <button className="prevStageBtn" onClick={() => { setStage('third place'); toTop() }}>Назад</button>
            {
              checkAllWinners(result.final)
                ? <button className="nextStageBtn" onClick={() => { setStage('results'); toTop() }}>Результаты</button>
                : <button className="fakeBtn" >Победитель не выбран</button>
            }


          </div>
          {/* <button onClick={printResult}>результаты</button> */}
        </div>
      }
      {
        (stage === 'results') && <div className="results">
          <div className="results__header">Результаты</div>
          <div className="results__content">
            <div className="result__winner">
              <h3>Твой фаворит:</h3>
              <img src={result.winners[0].flag} className={'winner_flag'} alt={""} />
              <h3>{result.winners[0].team}</h3>
            </div>
            <div className="results__full">
              <p>полные результаты</p>
              {
                resultShow && <Full result={result} />
              }
              <button className="showFull_btn" onClick={() => setResultShow(!resultShow)}>
                {resultShow && <img className="showFull_icon" src={'https://cdn-icons-png.flaticon.com/512/992/992703.png'} alt={""} />}
                {!resultShow && <img className="showFull_icon" src={'https://cdn-icons-png.flaticon.com/512/2985/2985151.png'} alt={""} />}
              </button>
            </div>

          </div>
          <div className="results__buttons">
            <button className="results_btn" onClick={() => { setStage('result'); toTop() }}>Сохранить</button>
            <button className="results_btn" onClick={() => { setStage('group'); toTop() }}>Заново</button>

          </div>
          {/* <button onClick={printResult}>результаты</button> */}
        </div>
      }
      <Footer />

    </div >
  );
}

export default App;
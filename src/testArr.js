let origArr = [
    [{ id: 0, win: 1 }, { id: 1, win: 0 }],
    [{ id: 2, win: 0 }, { id: 3, win: 1 }],
    [{ id: 4, win: 0 }, { id: 5, win: 0 }],
    [{ id: 6, win: 1 }, { id: 7, win: 0 }],
]

console.log(origArr);


let newArr = origArr.map(item => {

    let a = item.filter(i => i.win === 1);


    return a;
});

console.log(newArr);
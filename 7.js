const 입력 = Number(prompt('태어난 해 입력 ', '')) % 12

if (입력 === 0) { alert (' 원숭이띠 입니다.')}
else if (입력 === 1) { alert (' 닭 띠 입니다.')}
else if (입력 === 2) { alert (' 개 띠 입니다.')}
else if (입력 === 3) { alert (' 돼지 띠 입니다.')}
else if (입력 === 4) { alert (' 쥐 띠 입니다.')}
else if (입력 === 5) { alert (' 소 띠 입니다.')}
else if (입력 === 6) { alert (' 호랭 띠 입니다.')}
else if (입력 === 7) { alert (' 토끼 띠 입니다.')}
else if (입력 === 8) { alert (' 용 띠 입니다.')}
else if (입력 === 9) { alert (' 뱀 띠 입니다.')}
else if (입력 === 10) { alert (' 말 띠 입니다.')}
else if (입력 === 11) { alert (' 양 띠 입니다.')}

const tti = '원숭이,닭,개,돼지,쥐,소,호랭,토끼,용,뱀,말,양'. split(',')
alert(`${tti[입력]}입니다.`)

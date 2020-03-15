`Utwórz program random.js, w którym:
wypełnij tablicę dziesięcioma liczbami naturalnymi z przedziału <5,20> 
wyświetl na konsoli zawartość tablicy
Do wykonania obydwu powyższych operacji użyj funkcji strzałkowych.
`


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

const arr = Array(10).fill(0).map(el => getRandomIntInclusive(5, 20))

console.log(arr)
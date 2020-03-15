// boki trójkąta
//a = 3;
b = 4;
c = 5;
a = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

function calculate(a, b, c) {
    const p = (a + b + c) / 2;
    const result = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${result}.`)
}


calculate(a, b, c);
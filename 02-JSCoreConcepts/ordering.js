

`Program ordering.js zawiera funkcję odwracającą kolejność elementów tablicy. Zwróć uwagę na składowe tej funkcji.
Uzupełnij funkcję zwracającą posortowane elementy tablicy.
Uzupełnij funkcję zwracającą parzyste elementy tablicy.
Sprawdź działanie utworzonych funkcji.
`



    const reverse = function(arr) {
        arrReversed = [];
        arr.forEach(item => arrReversed.push(item));
        arrReversed.reverse();
        return arrReversed;
    }


    const sort = function(arr) {
        const arrSorted = arr.slice();
        arrSorted.sort();
        return arrSorted;
    }

    const even = function(arr) {
        return arr.filter(num => num % 2 === 0);
    }

    numbers = [8,3,2,1,5,4,6];
    console.log(numbers);
    console.log(reverse(numbers));
    console.log(even(numbers));
    console.log(reverse(even(numbers)));
    console.log(even(sort(numbers)));

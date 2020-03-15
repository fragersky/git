function isCar(car1, car2, car3) {
    const areAllTrue = car1 && car2 && car3;
    const areAllFalse = !(car1 || car2 || car3)
    return !!(areAllTrue || areAllFalse);
}

console.log(isCar(true, true, true));
console.log(isCar(false, false, false));
console.log(isCar(true, true, false));
console.log(isCar(false, false, true));
console.log(isCar(true, false, true));
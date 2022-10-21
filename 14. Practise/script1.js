function unicFn(initialArray) {
   return Array.from(new Set(initialArray));
}

const sendArray = [2, 3, 1, 3, 3, 7];
// let sendArray = ["Maks", "Stepan", "Vlad", "Maks", "Bogdan", "Vlad"];
console.log(unicFn(sendArray));

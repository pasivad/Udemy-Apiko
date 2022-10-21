function removeObj (arrayOfObj, keyName, value) {
   return arrayOfObj.filter(el => Object.keys(el) != keyName || Object.values(el) != value);
}

const arr = [
   {age: 1},
   {age: 2},
   {age: 2},
   {year: 2},
];

console.log(removeObj(arr, 'age', 2));
console.log(removeObj(arr, 'year', 2));

function isEvenArray(initialArray) {
   const isEven = initialArray.every(function (e) {
      return e % 2 == 0;
   });

   if (isEven == false){
      return "NO";
   } else return "YES";
}

const sendArray = [2, 3, 1, 3, 3, 7];
// const sendArray = [2, 6, 8, 2, 10, 4];
console.log(isEvenArray(sendArray));

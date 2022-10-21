// function findUser(initialObject) {
//   const arr = Object.entries(initialObject);

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i][1].age > 18 && arr[i][1].city === "London") {
//       console.log(arr[i][0]);
//     }
//   }
// }

// const obj = {
//    Max: {
//      age: 23,
//      city: "London"
//    },
//    Mike: {
//      age: 20,
//      city: "NY"
//    }
// };
// findUser(obj);


function findUser(initialObject) {
  const arr = Object.entries(initialObject);

  return arr.filter((el) => el[1].age > 18 && el[1].city === "London")[0][0];
}




const obj = {
  Max: {
    age: 23,
    city: "London"
  },
  Mike: {
    age: 20,
    city: "NY"
  },
  Ben: {
    age:21,
    city: "London"
  }
};

console.log(findUser(obj));
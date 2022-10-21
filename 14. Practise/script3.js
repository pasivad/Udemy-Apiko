function filterArray(initialArray) {
   console.log(initialArray.filter(el => typeof(el) == "string"));   
}

const sendArray = [2, "string", 3, "Stepan Kutso", NaN, "test"];
filterArray(sendArray);
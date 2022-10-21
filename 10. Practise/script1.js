function printPowsOf2(number) {
   if (typeof(number) !== "number"){
      console.log("incorrect type");
      return 0;
   }

   for(let i = 0; Math.pow(2, i) <= number; i++)
   {
      console.log(Math.pow(2, i));
   }
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(64);
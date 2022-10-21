const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
 
const compose = ([...fncs]) => data => fncs.reduceRight((g, f) => f(g), data);

const modifyArray = modifyCondition => data => {
   let newData = data.map(el => el.toLowerCase());

   if (modifyCondition === ' - '){ 
      const modString = newData.map(el => el[0].toUpperCase() + el.substring(1)).join(modifyCondition);
      return `Result: ${modString} length: ${modString.length}`;
   } 

   const modString = newData.join(modifyCondition);
   return `Result: ${modString} length: ${modString.length}`;
}

const capitalizeAllFirst = compose([console.log, modifyArray(' - ')]);
const allToLower = compose([console.log, modifyArray('-')]);

capitalizeAllFirst(arr);
allToLower(arr);
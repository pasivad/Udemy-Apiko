function printSeasonByMonth(month) {
   const monthNumberList = {
      JANUARY: '01',
      FEBRUARY: '02',
      MARCH: '03',
      APRIL: '04',
      MAY: '05',
      JUNE: '06',
      JULY: '07',
      AUGUST: '08',
      SEPTEMBER: '09',
      OCTOBER: '10',
      NOVEMBER: '11',
      DECEMBER: '12',
   };
   monthNumber = monthNumberList[month];
   if(monthNumber >= 3 && monthNumber <= 5){
      console.log("spring");
   }
   else if(monthNumber >= 6 && monthNumber <= 8){
      console.log("summer");
   }
   else if(monthNumber >= 9 && monthNumber <= 11){
      console.log("autumn");
   }
   else console.log("winter");
}
   
printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");
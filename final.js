function totalFine( fare ) {
    if(typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }

    const serviceCharge = 30;
    const fine = fare + (fare * 20 / 100) + serviceCharge;
    return fine;
}


function  onlyCharacter( str ) {
    if(typeof str !== "string") {
        return "Invalid";
    }

    return str.split(" ").join("").toUpperCase();
}


function  bestTeam( player1, player2 ) {
    if(typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }

    const pointsForTeam1 = player1.foul + player1.cardY + player1.cardR;
    const pointsForTeam2 = player2.foul + player2.cardY + player2.cardR;
      
    if(pointsForTeam1 === pointsForTeam2) {
        return "Tie";
    }
      
    if(pointsForTeam1 > pointsForTeam2) {
        return player2.name;
    } else {
        return player1.name;
    }
}


function  isSame(arr1 , arr2 ) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
         return "Invalid";
    }
  
    if(arr1.length !== arr2.length) {
         return false;
    }
       
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
           return false;
        }
    }
    return true;
}


function  resultReport( marks ) {
    if(!Array.isArray(marks)) {
        return "Invalid";
    }

    if (marks.length === 0) {
        return {
            finalScore: 0,
            pass: 0,
            fail: 0
        };
    }
  
   let totalScore = 0;
   let passCount = 0;
   let failCount = 0;
   
   for(const mark of marks) {
        totalScore = totalScore + mark;
     
        if(mark > 40) {
            passCount++;
        } else {
            failCount++;
        }
   }
   const averageScore = totalScore / marks.length;
   const finalScore = Math.round(averageScore);
   
   return `{ finalScore: ${finalScore}, pass: ${passCount}, fail: ${failCount} }`;
}
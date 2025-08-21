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
   
   return { finalScore: finalScore, pass: passCount, fail: failCount };
}
const marks = [50];
console.log(resultReport(marks));
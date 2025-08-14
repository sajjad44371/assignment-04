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
const team1 = { name: "Germany", foul: 13, cardY: 0, cardR: 0 };
const team2 = { name: "Sweden", foul: 7, cardY: 4, cardR: 1 };
console.log(bestTeam(team1, team2));
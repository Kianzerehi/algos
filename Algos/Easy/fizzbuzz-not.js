function awardBonuses() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("JACKPOT! 1 Million and a Yacht!");
    } else if (i % 3 === 0) {
      console.log("Vacation!");
    } else if (i % 5 === 0) {
      console.log("100,000 bonus");
    } else {
      console.log(":(");
    }
  }
}

awardBonuses();

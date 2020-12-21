// mission
const calcAces = (dice) => {
  return dice.reduce((a, b) => {
    return b === 1 ? a + b : a;
  }, 0);
};
const calcTwos = (dice) => {
  return dice.reduce((a, b) => {
    return b === 2 ? a + b : a;
  }, 0);
};
const calcThrees = (dice) => {
  return dice.reduce((a, b) => {
    return b === 3 ? a + b : a;
  }, 0);
};
const calcFours = (dice) => {
  return dice.reduce((a, b) => {
    return b === 4 ? a + b : a;
  }, 0);
};
const calcFives = (dice) => {
  return dice.reduce((a, b) => {
    return b === 5 ? a + b : a;
  }, 0);
};
const calcSixes = (dice) => {
  return dice.reduce((a, b) => {
    return b === 6 ? a + b : a;
  }, 0);
};

// combination
const calcChoice = (dice) => {
  return dice.reduce((a, b) => a + b, 0);
};
const calcFourKind = (dice) => {
  let countObj = {};
  for (let d of dice) {
    countObj[d] = (countObj[d] || 0) + 1;
  }
  const fourKind = Object.values(countObj).includes(4);
  if (fourKind) {
    let sum = 0;
    for (let d in countObj) {
      sum += d * countObj[d];
    }
    return sum;
  } else return 0;
};
const calcFullHouse = (dice) => {
  let countObj = {};
  for (let d of dice) {
    countObj[d] = (countObj[d] || 0) + 1;
  }
  const fullHouse =
    Object.values(countObj).includes(3) && Object.values(countObj).includes(2);
  if (fullHouse) {
    let sum = 0;
    for (let d in countObj) {
      sum += d * countObj[d];
    }
    return sum;
  } else return 0;
};
const calcSmallStr = (dice) => {
  const diceSet = new Set(dice);
  if (!diceSet.has(3) || !diceSet.has(4)) {
    return 0;
  } else {
    const smallStr =
      (diceSet.has(1) && diceSet.has(2)) ||
      (diceSet.has(2) && diceSet.has(5)) ||
      (diceSet.has(5) && diceSet.has(6));
    return smallStr ? 15 : 0;
  }
};
const calcLargeStr = (dice) => {
  const diceSet = new Set(dice);
  if (
    !diceSet.has(2) ||
    !diceSet.has(3) ||
    !diceSet.has(4) ||
    !diceSet.has(5)
  ) {
    return 0;
  } else {
    const largeStr = diceSet.has(1) || diceSet.has(6);
    return largeStr ? 30 : 0;
  }
};
const calcYahtzee = (dice) => {
  const allEqual = dice.every((v) => v === dice[0]);
  return allEqual && dice[0] !== 0 ? 50 : 0;
};

export const calcHelper = (category, dice) => {
  switch (category) {
    case "aces":
      return calcAces(dice);
    case "twos":
      return calcTwos(dice);
    case "threes":
      return calcThrees(dice);
    case "fours":
      return calcFours(dice);
    case "fives":
      return calcFives(dice);
    case "sixes":
      return calcSixes(dice);
    case "choice":
      return calcChoice(dice);
    case "fourKind":
      return calcFourKind(dice);
    case "fullHouse":
      return calcFullHouse(dice);
    case "smallStr":
      return calcSmallStr(dice);
    case "largeStr":
      return calcLargeStr(dice);
    case "yahtzee":
      return calcYahtzee(dice);
  }
};

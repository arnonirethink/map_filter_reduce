//exercício: retornar o numero de eleitores jovens totais e que votaram, bem como os que são maduros totais e que votaram e sêniores.

const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const votersResult = voters.reduce(
  (accumulator, currentValue) => {
    if (currentValue.age >= 19 && currentValue.age <= 25) {
      accumulator.numYoungPeople++;
      if (currentValue.voted) {
        accumulator.numYoungVote++;
      }
    } else if (currentValue.age >= 26 && currentValue.age <= 40) {
      accumulator.numMidPeople++;
      if (currentValue.voted) {
        accumulator.numMidVote++;
      }
    } else if (currentValue.age >= 41 && currentValue.age <= 55) {
      accumulator.numOldPeople++;
      if (currentValue.voted) {
        accumulator.numOldVote++;
      }
    }
    return accumulator;
  },
  {
    numYoungPeople: 0, //o reduce precisa começar com zero para somar
    numYoungVote: 0,
    numMidPeople: 0,
    numMidVote: 0,
    numOldPeople: 0,
    numOldVote: 0,
  }
);

console.log(votersResult);

const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = data.employees.find((element) => element.id === id).responsibleFor[0];
  const animalArray = data.species.find((element) => element.id === firstAnimal).residents;
  const oldestAnimal = animalArray.sort((animalA, animalB) => animalB.age - animalA.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;

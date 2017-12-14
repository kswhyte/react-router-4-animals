const Animal = {
  animals: [
    { number: 1, name: "Salamander", class: "Amphibian"},
    { number: 2, name: "Orangutan", class: "Mammal"},
    { number: 3, name: "Leopard", class: "Mammal"},
    { number: 4, name: "MantaRay", class: "Fish"},
    { number: 5, name: "KomodoDragon", class: "Reptile"},
    { number: 6, name: "Hawk", class: "Bird"},
    { number: 7, name: "Tarantula", class: "Arthropod"}
  ],
  all: function () { return this.animals },
  get: function (id) {
    const isAnimal = p => p.number === id
    return this.animals.find(isAnimal)
  }
}

export default Animal;

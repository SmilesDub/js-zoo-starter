//starter code
var animalPopulation = 0;

class Animal {
  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
    animalPopulation++;
  }
  sleep() {
    console.log(this.name + " sleeps for 8 hours");
  }
  eat(food) {
    console.log(this.name + " eats " + food);
    if(food == this.favoriteFood) {
      console.log("Yum!! " + this.name + " wants more " + food)
    } else {
      this.sleep();
    }
  }
}

class Tiger extends Animal{
  constructor(name) {
    super(name, "meat");
  }
}

class Bear extends Animal{
  constructor(name) {
    super(name, "fish");
  }
  sleep() {
    console.log(this.name + " hibernates for 4 months");
  }
}

class Unicorn extends Animal{
  constructor(name) {
    super(name, "marshmallows");
  }
  sleep() {
    console.log(this.name + " sleeps in a cloud");
  }
}

class Bee extends Animal{
  constructor(name) {
    super(name, "pollen");
  }
  sleep() {
    console.log(this.name + " does not sleep.");
  }
  eat(food) {
    if(food == this.favoriteFood) {
      super.eat("pollen");
      this.sleep;
    } else {
      console.log(this.name + " eats " + food);
      console.log("YUCK! " + this.name + " will not eat " + food);
    }
  }
}

class Giraffe extends Animal{
  constructor(name) {
    super(name, "leaves");
  }
  eat(food) {
    if(food == this.favoriteFood) {
      super.eat("leaves");
      this.sleep;
    } else {
      console.log(this.name + " eats " + food);
      console.log("YUCK! " + this.name + " will not eat " + food);
    }
  }
}

class Zookeeper {
  constructor(name) {
    this.name = name;
  }
  feedAnimals(array, food) {
    console.log(this.name + " is feeding " + food + " to " + array.length + " of " + animalPopulation + " animals.");
    array.forEach((element) => element.eat(food));
  }
}

function run() {
  var tigger = new Tiger("Tigger");
  var pooh = new Bear("Pooh");
  var rarity = new Unicorn("Rarity");
  var stinger = new Bee("Stinger");
  var gemma = new Giraffe("Gemma");
  var zoebot = new Zookeeper("Zoebot");

  tigger.eat("meat");
  tigger.eat("kibble");
  pooh.eat("fish");
  pooh.eat("meat");
  rarity.eat("marshmallows");
  rarity.sleep();
  gemma.eat("meat");
  gemma.eat("leaves");
  stinger.eat("ice cream");
  stinger.eat("pollen");

  var animals = [tigger, pooh, rarity, gemma, stinger];
  zoebot.feedAnimals(animals, "ice");
}
  


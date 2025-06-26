'use strict';

class Animal {
  static alive = [];

  constructor(name = 'Unnamed') {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  changeHealth(amount) {
    this.health += amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  unhide() {
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden) {
      return;
    }
    target.changeHealth(-50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

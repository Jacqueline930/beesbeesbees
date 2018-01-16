var RetiredForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "find pollen";
  this.canFly = true;
  this.treasureChest = [];
};
RetiredForagerBee.prototype = Object.create(Bee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function() {treasureChest ++};

};

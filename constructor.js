function Animal () {};

Animal.prototype.poop = function () {
  console.log("💩");
};

module.exports = Animal;


function Building () {};

Building.prototype.burn = function () {
  console.log("🔥");
  this.isBurned = true;
};

module.exports = new Building();

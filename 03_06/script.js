/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pcketNum value:", backpack.pocketNum); //this is call .(dot) notation
console.log("Strap lenght L:", backpack.strapLength.left);


//Using bracket notation (allow to do more advanced things):cases we need more control

//wrap property name in a cotation because it is a string

//bracket notation permits to use date notation in a variaty of formats.

var query= "pocketNum"; //passing the property value as a variable
console.log("The pcketNum value:", backpack[query]); //square backet


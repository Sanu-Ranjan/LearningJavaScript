//empty object creation
let obj1 = new Object();
let obj2 = {};

// square brackets
let user = {
  name: "John",
  age: 30,
};

let key = prompt("What do you want to know about user?", "name");
//input from user with default value
if (key in user) alert(user[key]);
else alert("Invalid property");
//computed properties
let fruit = prompt("Name a fruit to add to buy", "Apples");
let basket = {
  [fruit]: 5,
  [fruit + "computers"]: 3,
};
alert(basket.apple);

//property short hand values
function makeUSer(name, age) {
  return {
    name,
    age: age,
  };
}

let obj = {
  0: "test", // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert(obj["0"]); // test
alert(obj[0]); // test (same property)

//property check
alert(basket.mango === undefined);
alert(key in basket); // key stores string

//by default integer properties are sorted
//se can keep original order by making them non integer

//exercise : check if a property value stored is number
if (typeof basket["apple"] == "number") alert("true");

//cloning an object
let newUser = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
//if propertyname already exists it gets over written
Object.assign(newUser, permissions1, permissions2);

let user3 = Object.assign({ name: "Pete" }, permissions1, permissions2);

//structured cloning method
//structured cloning method is used for deep cloning
user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(user);

alert(user.sizes === clone.sizes); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60; // change a property from one place
alert(clone.sizes.width); // 50, not related
//The structuredClone method can clone most data types,
// such as objects, arrays, primitive values
//it can also be used to clone objects that references itself
//directly of via chain or references
let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone2 = structuredClone(user);
alert(clone.me === clone); // true
// but it cannot clone objects that have functions as their properties
//or canot clone objects having methods

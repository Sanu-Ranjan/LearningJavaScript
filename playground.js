let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
  dis: function () {
    console.log(this.name);
  },
};
console.log(user.dis());
let user2 = clone(user);
console.table(user2);
function clone(obj) {
  return structuredClone(obj);
}

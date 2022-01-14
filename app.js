var Role;
(function (Role) {
    Role[Role["ben"] = 0] = "ben";
    Role[Role["billie"] = 1] = "billie";
})(Role || (Role = {}));
console.log(Role.ben === 0);
var person = {
    name: "ben",
    age: 41,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    adder: function () {
        return this.age * 2;
    }
};
person.role.push("admin");
console.log(person.adder());
var a = [1, 2, 3];
var b = [4, 5, 6];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
function test(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}

var person = {};
person.p1 = "property1";

console.log(person);
var person1 = {
	firstName: "Luke",
	lastName: "Skywalker",
	getFullName: function () {
		return this.firstName + " " +
			this.lastName;
			}
		};
		console.log(person1.getFullName());
console.log(person1['firstName']);
var person2 = {name : { first: 'Bob', last: 'Smith' }}
console.log(person2.name.first);


/*person.name = "jaki";

person.last = "shaik";
console.log(person)

console.log(person.last="sharief");

var person1 = {
    firstName: "Luke",
	lastName: "Skywalker",
	getFullName: function () {
		return this.firstName + " " +
			this.lastName;
			}
}

console.log(person1.getFullName());

person1.new = "new";
console.log(person1);*/

/*var person11 = { name: 'Chris', greeting: function() { console.log('Hi! I\'m ' + this.name + '.'); } } 
var person21 = { name: 'Brian', greeting: function() { console.log('Hi! I\'m ' + this.name + '.'); } }

person11.greeting();*/
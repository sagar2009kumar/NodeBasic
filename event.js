var events = require('events');
var util = require('util');

var Person = function (name) {
    this.name = name;
}

/**** Inherigint the event class ****/

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function(person) {

    person.on('speak', function(mssg) {

        console.log(person.name +" : said "+ mssg);

    })
});

james.emit('speak', 'I want some eggs.');
mary.emit('speak', 'Do you need boiled eggs or the raw one ?');


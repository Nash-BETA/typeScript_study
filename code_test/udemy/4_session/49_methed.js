"use strict";
var Person = /** @class */ (function () {
    function Person(initName) {
        this.name = initName;
    }
    Person.prototype.greeting = function () {
        console.log("HELLO," + this.name);
    };
    return Person;
}());

"use strict";
var PersonClass = /** @class */ (function () {
    function PersonClass(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    PersonClass.prototype.incrementAge = function () {
        this.age += 1;
    };
    PersonClass.prototype.greeting = function () {
        console.log("HELLO," + this.name + ". i'm " + this.age + " years");
    };
    return PersonClass;
}());
var per = new PersonClass('nakayama', 30);
per.greeting();
per.age = 50;
//per.incrementAge();
per.greeting();

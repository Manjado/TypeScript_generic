"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('Mike'));
console.log(echo(27));
console.log(echo({ name: "Mike", age: 27 })); // you can check length because you ide show you, but is wrong
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Mike').length);
//console.log(betterEcho(27).length);  Property 'length' does not exist on type '27'
console.log(betterEcho(27)); // we dont need to use <number>
console.log(betterEcho({ name: "Mike", age: 27 }));
//Built-in Generics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
//testResults.push('string'); in such case, compiltion will return error about type
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
// Generic Types
var echo2 = betterEcho;
console.log(echo2("something"));
// in generic user specify the hole type of data
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
//const simpleMath = new SimpleMath<number>();
var simpleMath = new SimpleMath();
//simpleMath.baseValue = "something"; now we will get a compilation error
//simpleMath.baseValue = 10;
//simpleMath.multiplyValue = 20;
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
//exercise
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

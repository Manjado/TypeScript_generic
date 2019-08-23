// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo('Mike'));
console.log(echo(27));
console.log(echo({name: "Mike", age: 27}));  // you can check length because you ide show you, but is wrong

// Better Generic
function betterEcho<T>(data: T) { //e.g this <T> will tell TS this is a generic function
    return data;
}

console.log(betterEcho('Mike').length);
//console.log(betterEcho(27).length);  Property 'length' does not exist on type '27'
console.log(betterEcho<number>(27)); // we dont need to use <number>
console.log(betterEcho({name: "Mike", age: 27}));

//Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
//testResults.push('string'); in such case, compiltion will return error about type

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

printAll<string>(["Apple","Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho

console.log(echo2<string>("something"));


// in generic user specify the hole type of data

class SimpleMath<T extends number | string, U extends number | string> { //this is a generic constraint
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

//const simpleMath = new SimpleMath<number>();
const simpleMath = new SimpleMath<string, number>();
//simpleMath.baseValue = "something"; now we will get a compilation error
//simpleMath.baseValue = 10;
//simpleMath.multiplyValue = 20;
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

//exercise
class MyMap<T>  {
    private map: {[key:string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples",10);
numberMap.setItem("bananas", 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
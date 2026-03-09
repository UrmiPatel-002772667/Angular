// Function with optional parameter
function add(a: number, b: number, c?: number) : number{
    return c? a + b + c : a + b;
}
console.log(add(10,20));
console.log(add(10,20,30));

// Function with rest parameters
function add2(a: number, b: number, ...c: number[]) : number{
    return a + b + c.reduce((a,b) => a + b, 0);
}
let nums = [30, 40, 50];
console.log(add2(10,20,...nums));
console.log(add2(10,20, 30, 40, 50));

// Arrow function
const sub = (a: number, b: number) : number => a - b;
console.log(sub(20,10));

// Function expression
const mul = function(a: number, b: number) : number{
    return a * b;
}
console.log(mul(10,20));

// Generic function
function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}
let concatNum = getItems<number>([1,2,3]);
let concatStr = getItems<string>(["hello", "world"]);
let concat = getItems([1, "hello"]); // Type is inferred as (string | number | boolean)[]
console.log(concatNum);
console.log(concatStr);
console.log(concat);    
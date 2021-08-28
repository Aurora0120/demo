const VAL: number = 1; // 定义常量
let whatever: string = '你好'; // 定义变量
whatever = 'something'; // 变量重新赋值就没事
let s_: '10' | '20' | '30' = '20';
s_ = '10';
let A: number = 5;
let B: number = 2;
let C: number = A - B;
console.log(C);
A = 2;
B = 5;
C = A - B; // 你还可以这样
console.log(C);
let S: number = 10;
let T: number = 2;
let L: number = S * T;
console.log(L);
let W: string = 'weight';
let H: string = 'high';
console.log(W + H);
let Z: number = 3;
let SEN: string = `I have ${Z} apples`;
console.log(SEN);

console.log('hello world');

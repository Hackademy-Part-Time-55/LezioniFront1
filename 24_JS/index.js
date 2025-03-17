
// const now = new Date();
// console.log(now);

// const date = new Date(1722237851000);
// console.log(date);

// monthIndex 0 -> gennaio, 11 -> dicembre
// const date = new Date(2025, 0, 15, 9, 30, 32);
// console.log(date);

// ISO 8601
// const date = new Date('2025-03-17T20:05:32+01:00');
// console.log(date);



/*
const now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());    // monthIndex 0 -> gennaio, 11 -> dicembre
console.log(now.getDay());  // dayOfWeek 0 -> domenica, 6 -> sabato
console.log(now.getDate()); // dayOfMonth
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.getTime()); // i millisecondi trascorsi dal 1 gennaio 1970 UTC
*/

// const now = new Date();
// now.setHours(21);
// console.log(now);

/*
const now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
*/


/*
const buyDate = new Date(2025, 2, 15);
const buyDateAgain = new Date(2025, 2, 15);

const areDatesEquals = buyDate.getTime() == buyDateAgain.getTime();
console.log(areDatesEquals);
*/


const buyDate = new Date(2025, 2, 15);
const now = new Date();

console.log(buyDate.getTime() < now.getTime());











const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = []; // string[][]

const car = carMakers[0];

// flexible types

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];

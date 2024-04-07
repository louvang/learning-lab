const add = (a: number, b: number): number => {
  return a + b;
};

// arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function assigned to a var
const multiply = function (a: number, b: number): number {
  return a * b;
};

// never - this function will never return anything since we're throwing an error
const throwError = (message: string): never => {
  throw new Error(message);
};

// destructuring

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

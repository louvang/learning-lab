// generics are like function argument.
// typically, generics are written as MyClass<T> but it could be
// MyClass<TypeOfData> or any other phrase you want to use

class HoldAnything<T> {
  data: T;

  add(a: T): T {
    return a;
  }
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
holdNumber.add(10);

const holdString = new HoldAnything<string>();
holdString.data = 'hello';

// more examples of generics
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const strArr1 = new ArrayOfStrings(['a', 'b', 'c']); // ordinary class
const strArr2 = new ArrayOfAnything<string>(['a', 'b', 'c']); // using generics
const strArr3 = new ArrayOfAnything(['a', 'b', 'c']); // type inference with generics

// examples of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

// generic constraints
class Cat {
  print() {
    console.log('I am a cat');
  }
}

class Mouse {
  print() {
    console.log('I am a mouse');
  }
}

interface Printable {
  print(): void;
}

// whatever type T we extend here, it will have a print() method
function printMiceOrCats<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printMiceOrCats<Mouse>([new Mouse(), new Mouse(), new Mouse()]); // no errors because each element has a print method

printMiceOrCats<Cat>([new Cat(), new Cat(), new Cat()]);
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

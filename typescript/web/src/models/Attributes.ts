export class Attributes<T extends {}> {
  constructor(private data: T) {}

  // T is the interface we pass in (eg UserProps)
  // K means can only be one of the keys of T
  // (key: K) means the arg can only be of type K
  // T[K] means we will return the type of the key
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const profile = {
  displayName: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, displayName }: { age: number; displayName: string } = profile; // destructuring
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

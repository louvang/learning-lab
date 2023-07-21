import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const matchedCars = data.filter((car) => {
      const name = car.name.toLowerCase();
      const term = searchTerm.toLowerCase();
      return name.includes(term);
    });

    return matchedCars.reduce((acc, car) => {
      return acc + car.cost;
    }, 0);
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;

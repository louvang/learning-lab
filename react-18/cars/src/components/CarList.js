import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';
import { createSelector } from 'reselect';

function CarList() {
  const dispatch = useDispatch();

  const carDataSelector = createSelector(
    (state) => {
      return state;
    },
    ({ cars, form }) => {
      const { data, searchTerm } = cars;
      const { name } = form;

      const matchedCars = data.filter((car) => {
        const name = car.name.toLowerCase();
        const term = searchTerm.toLowerCase();
        return name.includes(term);
      });

      return {
        cars: matchedCars,
        name: name,
      };
    }
  );

  const { cars, name } = useSelector(carDataSelector);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars} <hr />
    </div>
  );
}

export default CarList;

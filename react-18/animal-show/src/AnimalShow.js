import './AnimalShow.css';
import { useState } from 'react';
import cat from './svg/cat.svg';
import frog from './svg/frog.svg';
import heart from './svg/heart.svg';
import monkey from './svg/monkey.svg';
import octopus from './svg/octopus.svg';
import panda from './svg/panda.svg';
import whale from './svg/whale.svg';

const svgMap = {
  cat,
  frog,
  monkey,
  octopus,
  panda,
  whale,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="{type}" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      ></img>
    </div>
  );
}

export default AnimalShow;

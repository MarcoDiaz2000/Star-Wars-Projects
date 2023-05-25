import spaceship1 from '../images/spaceship1.png';
import spaceship2 from '../images/spaceship2.png';
import spaceship3 from '../images/spaceship4.png';

const createSpaceships = () => {
  const spaceshipContainer1 = document.createElement('div');
  const spaceshipContainer2 = document.createElement('div');
  const spaceshipContainer3 = document.createElement('div');

  spaceshipContainer1.id = 'spaceship1';
  spaceshipContainer2.id = 'spaceship2';
  spaceshipContainer3.id = 'spaceship3';

  const spaceshipImg1 = document.createElement('img');
  const spaceshipImg2 = document.createElement('img');
  const spaceshipImg3 = document.createElement('img');

  spaceshipImg1.src = spaceship1;
  spaceshipImg2.src = spaceship2;
  spaceshipImg3.src = spaceship3;

  spaceshipContainer1.appendChild(spaceshipImg1);
  spaceshipContainer2.appendChild(spaceshipImg2);
  spaceshipContainer3.appendChild(spaceshipImg3);

  document.body.appendChild(spaceshipContainer1);
  document.body.appendChild(spaceshipContainer2);
  document.body.appendChild(spaceshipContainer3);
};

export default createSpaceships;
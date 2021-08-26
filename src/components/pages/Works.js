import * as React from 'react';
import '../style.css';

import pokemonBattleImg from '../../assets/images/Pokemon-Battle.png';
import drinkLibraryImg from '../../assets/images/Drink-Library.png';
import weatherDashboardImg from '../../assets/images/Weather-Dashboard.png';
import workdaySchedulerImg from '../../assets/images/Workday-Scheduler.png';

const Works = [
  {
    name: 'Pokemon Battler',
    img: `${pokemonBattleImg}`,
    deployed: 'https://pokebattlerproject.herokuapp.com',
  },
  {
    name: 'Drink Library',
    img: `${drinkLibraryImg}`,
    deployed: 'https://hugh18019.github.io/Drinks-Library/',
  },
  {
    name: 'Weather Dashboard',
    img: `${weatherDashboardImg}`,
    deployed: 'https://hugh18019.github.io/Weather-Dashboard/',
  },
  {
    name: 'Workday Scheduler',
    img: `${workdaySchedulerImg}`,
    deployed: 'https://hugh18019.github.io/Work-Day-Scheduler/',
  },
];

function getTagsforWork() {
  let tags = [];

  for (let i = 0; i < Works.length; i++) {
    tags.push(
      <div
        key={i}
        className='p-2 float-start head-text justify-content-center'
        style={{ width: '35%', height: '80%' }}
      >
        <a href={Works[i].deployed}>
          <img
            src={Works[i].img}
            className='rounded img-fluid'
            alt='otherwork cap'
            style={{ width: '100%' }}
          />
        </a>
        <div>
          <p>{Works[i].name}</p>
        </div>
      </div>
    );
  }

  console.log(tags);
  return tags;
}

export default function OtherWork(props) {
  return (
    <div className='container d-flex flex-column justify-content-center'>
      <div className='row justify-content-center d-grid gap-3'>
        {getTagsforWork()}
      </div>
    </div>
  );
}

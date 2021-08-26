import React, { useState } from 'react';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  console.log('Got to App');

  return (
    <PortfolioContainer

    //   visitHomeCount={visitHomeCount}
    //   setVisitHomeCount={setVisitHomeCount}
    />
  );
}

export default App;

// import Header from './components/pages/Header';
// import Stripe from './components/pages/Stripe';
// import About from './components/pages/About';
// // import MainWork from './components/MainWork';
// import Work from './components/pages/Works';

// import pokemonBattleImg from './assets/images/Pokemon-Battle.png';
// import drinkLibraryImg from './assets/images/Drink-Library.png';
// import weatherDashboardImg from './assets/images/Weather-Dashboard.png';
// import workdaySchedulerImg from './assets/images/Workday-Scheduler.png';

// const Works = [
//   {
//     name: 'Pokemon Battler',
//     img: `${pokemonBattleImg}`,
//   },
//   {
//     name: 'Drink Library',
//     img: `${drinkLibraryImg}`,
//   },
//   {
//     name: 'Weather Dashboard',
//     img: `${weatherDashboardImg}`,
//   },
//   {
//     name: 'Workday Scheduler',
//     img: `${workdaySchedulerImg}`,
//   },
// ];

// export default function App() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Stripe />
//         <About />
//         <div className='container d-flex flex-column justify-content-center'>
//           {/* <div className='row justify-content-center'>
//             <MainWork />
//           </div> */}
//           <div className='row justify-content-center d-grid gap-3'>
//             {Works.map((work) => (
//               <Work workName={work.name} img={work.img} />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

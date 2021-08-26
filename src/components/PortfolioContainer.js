import React, { useState, useEffect } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Works';
import Contact from './pages/Contact';

// let temp;
// let count = 5;

export default function PortfolioContainer(boo) {
  const [currentPage, setCurrentPage] = useState('About');
  // const [a, setA] = useState(1);
  // useEffect(() => {
  //   setA(2);
  // }, []);

  // useEffect(() => {
  //   setCurrentPage('About');
  // }, []);

  // console.log(currentPage);

  // console.log('count', count);

  // const [firstTimeHome, setFirstTimeHome] = useState(false);
  // temp = firstTimeHome;
  // useEffect(() => {
  //   temp = true;
  //   count--;
  // }, []);
  // console.log('temp', temp);
  // console.log('firstTimeHome', firstTimeHome);

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Works') {
      return <Work />;
    }

    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

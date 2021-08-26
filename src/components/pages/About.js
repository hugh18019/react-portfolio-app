import React from 'react';

export default function AboutMe() {
  console.log('got here');
  const intro = `My name is Huiran Lin. I'm a CS major at Sonoma State University. I've
    mostly worked with C++. I'm currently attending the coding bootcamp at
    UC Berkeley to become a full stack developer.`;

  return (
    <div className='container ms-3'>
      <h2 className=''> About Me </h2>
      <div>{`${intro}`}</div>
    </div>
  );
}

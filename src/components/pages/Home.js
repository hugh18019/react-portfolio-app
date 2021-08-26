import React from 'react';
import '../style.css';

export default function Home() {
  return (
    <div>
      <div className='d-flex justify-content-center align-item-center'>
        <section>This is Huiran's Porfolio Website.</section>
      </div>

      <footer>
        <h4>Contact Me</h4>
        <p>
          <p id='email'>hugh80082@gmail.com</p>
          <a
            className='mr-3'
            href='https://www.linkedin.com/in/huiran-lin-0999b419b/'
          >
            LinkedIn
          </a>
          <a href='https://github.com/hugh18019'>GitHub</a>
        </p>
      </footer>
    </div>
  );
}

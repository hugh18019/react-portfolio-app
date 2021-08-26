import React, { useState } from 'react';
import '../style.css';

import validateEmail from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      alert('Email, name, or message is invalid');
      return;
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    alert('Message Sent!');
  };

  return (
    <div className=' d-flex justify-content-center'>
      <div className='col-8'>
        <form>
          <div class='mb-3'>
            <label for='inputEmail' class='form-label'>
              Email address
            </label>
            <input
              value={email}
              name='email'
              onChange={handleInputChange}
              type='email'
              class='form-control'
              id='inputEmail'
            />
          </div>
          <div class='mb-3'>
            <label for='inputUserName' class='form-label'>
              Name
            </label>
            <input
              value={name}
              name='name'
              onChange={handleInputChange}
              type='text'
              class='form-control'
              id='inputName'
            />
          </div>
          <div class='mb-3'>
            <label for='inputMessage' class='form-label'>
              Message
            </label>
            <input
              value={message}
              name='message'
              onChange={handleInputChange}
              type='text'
              class='form-control'
              id='inputMessage'
            />
          </div>
          <button
            type='submit'
            class='btn btn-primary'
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>

        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;

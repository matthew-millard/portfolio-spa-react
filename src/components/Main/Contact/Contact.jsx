import React, { useState } from 'react';
import styles from './Contact.module.css';
import { isValidEmail } from '../../../utils/validator';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleBlur = e => {
    if (!e.target.value) {
      switch (e.target.name) {
        case 'name':
          setNameError('This field is required');
          break;
        case 'email':
          setEmailError('This field is required');
          break;
        case 'message':
          setMessageError('This field is required');
          break;
        default:
          break;
      }
    } else {
      switch (e.target.name) {
        case 'name':
          setNameError('');
          break;
        case 'email':
          setEmailError(isValidEmail(e.target.value) ? '' : 'Invalid email address');
          break;
        case 'message':
          setMessageError('');
          break;
        default:
          break;
      }
    }
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.paragraph}>
        I'm always open to discussing web development work, or just to chat about all things tech! Feel free to reach
        out to me via email or through my social media channels. Your message will be greatly appreciated. I Looking
        forward to connecting with you!
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" value={name} onBlur={handleBlur} onChange={handleChange} required />
          <p className={nameError ? styles.error : styles.errorHidden}>{nameError}</p>
        </div>
        <br />
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <p className={emailError ? styles.error : styles.errorHidden}>{emailError}</p>
        </div>
        <br />
        <div className={styles.inputWrapper}>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            name="message"
            value={message}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          ></textarea>
          <p className={messageError ? styles.error : styles.errorHidden}>{messageError}</p>
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;

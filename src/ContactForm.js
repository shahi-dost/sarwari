import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState({ message: null, type: '' });

  useEffect(() => {
    // Log environment variables to the console
    console.log('Service ID:', process.env.REACT_APP_SERVICE_ID);
    console.log('Template ID:', process.env.REACT_APP_TEMPLATE_ID);
    console.log('Public Key:', process.env.REACT_APP_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Log form submission
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
          setStateMessage({ message: 'Message sent!', type: 'success' });
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage({ message: null, type: '' });
          }, 5000);
        },
        (error) => {
          console.error('Failed to send email:', error);
          setStateMessage({ message: 'Something went wrong, please try again later', type: 'error' });
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage({ message: null, type: '' });
          }, 5000);
        }
      );
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Email Topic</label>
      <select name="email_topic" required>
        <option value="Schedule a Visit">Schedule a Visit</option>
        <option value="Translation Request: Legal Documents, Business Documents, or Medical Record"> Translation Request: Legal Documents, Business Documents, or Medical Record</option>
        <option value="General Inquiry about Translation Services">General Inquiry about Translation Services</option>
        <option value="Quote Request for Translation Services">Quote Request for Translation Services</option>
        <option value="Interpreter Request: Legal Proceedings, Business Meeting, or Medical Interpretation"> Interpreter Request: Legal Proceedings, Business Meeting, or Medical Interpretation</option>
        <option value="General Inquiry about Interpretation Services">General Inquiry about Interpretation Services</option>
        <option value="Quote Request for Interpretation Services">Quote Request for Interpretation Services</option>
        <option value="Other Translation Request">Other Translation Request</option>
        <option value="Other Interpretation Request">Other Interpretation Request</option>
        <option value="Other">Other</option>
      </select>
      <label>Message</label>
      <textarea name="message" required />

      <input type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage.message && <p className={`state-message ${stateMessage.type}`}>{stateMessage.message}</p>}
    </form>
  );
};

export default ContactForm;
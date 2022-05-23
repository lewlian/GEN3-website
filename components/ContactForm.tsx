/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/ContactForm.module.scss';
import { useEffect, useState } from 'react';
import { appendSpreadsheet } from '../utils/googleSheetService';

const limitMessageCount = 200;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [currentMessageCount, setCurrentMessageCount] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const handleMessageChange = (e: any) => {
    if (
      currentMessageCount < limitMessageCount ||
      e.nativeEvent.inputType === 'deleteContentBackward' ||
      e.nativeEvent.inputType === 'deleteContentForward'
    ) {
      setMessage((e.target.value as string).substring(0, 200));
    }
  };

  useEffect(() => {
    setCurrentMessageCount(message.length);
  }, [message]);

  const setBlank = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) {
      setSuccess(false);
      return setError('Please fill in all the fields.');
    }

    if (!email.match(mailformat)) {
      setSuccess(false);
      return setError('Please give a valid email.');
    }

    try {
      await appendSpreadsheet({
        Name: name,
        Email: email,
        Subject: subject,
        Message: message,
      });
      setBlank();
      setSuccess(true);
      return setError('');
    } catch (error) {
      setSuccess(false);
      return setError('Something went wrong. Please try again.');
    }
  };

  const formValidation = () => {
    if (!name || !email || !subject || !message) {
      return setSubmitDisabled(true);
    }
    setSubmitDisabled(false);
  };

  useEffect(() => {
    formValidation();
  }, [name, email, subject, message]);

  return (
    <div id='ContactFormContainer' className={styles.container}>
      <div className={styles.main}>
        <input
          type='text'
          value={name}
          placeholder='Your name'
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          value={email}
          placeholder='Your email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='text'
          value={subject}
          placeholder='Subject'
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <textarea
          value={message}
          placeholder='Message'
          onChange={(e) => handleMessageChange(e)}
          rows={5}
          required
        />
        <div className={styles.wordCount}>
          <p>
            {currentMessageCount}/{limitMessageCount}
          </p>
        </div>

        {error && <p className={styles.error}>{error}</p>}
        {success && (
          <p className={styles.success}>
            We have received your contact information. <br />
            We will get back to you in 3 - 5 working days.
          </p>
        )}
      </div>

      <div className={styles.action}>
        <button type='button' onClick={handleSubmit} disabled={submitDisabled}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { appendSpreadsheet } from "../../../utils/googleSheetService";
import emailjs from "@emailjs/browser";
import envConfig from "../../../utils/envConfig";

const limitMessageCount = 200;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [currentMessageCount, setCurrentMessageCount] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const handleMessageChange = (e: any) => {
    if (
      currentMessageCount < limitMessageCount ||
      e.nativeEvent.inputType === "deleteContentBackward" ||
      e.nativeEvent.inputType === "deleteContentForward"
    ) {
      setMessage((e.target.value as string).substring(0, 200));
    }
  };

  useEffect(() => {
    setCurrentMessageCount(message.length);
  }, [message]);

  const setBlank = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) {
      setSuccess(false);
      return setError("Please fill in all the fields.");
    }

    if (!email.match(mailformat)) {
      setSuccess(false);
      return setError("Please give a valid email.");
    }

    var emailSent = true;

    try {
      const emailStatus = await emailjs.send(
        envConfig.EMAIL_SERVICE_ID,
        envConfig.EMAIL_TEMPLATE_ID,
        {
          subject,
          from_name: name,
          from_email: email,
          message,
        },
        envConfig.EMAIL_PUBLIC_KEY
      );

      if (emailStatus.status === 200) {
        emailSent = true;
      } else {
        emailSent = false;
      }
    } catch (error) {
      emailSent = false;
    }

    const _date = new Date();
    const currentDate = `${_date.getDate()}/${
      _date.getMonth() + 1
    }/${_date.getFullYear()}`;

    try {
      await appendSpreadsheet({
        Name: name,
        Email: email,
        Subject: subject,
        Message: message,
        AutomatedEmail: emailSent,
        Date: currentDate,
      });
      setBlank();
      setSuccess(true);
      return setError("");
    } catch (error) {
      console.log(error);
      setSuccess(false);
      return setError("Something went wrong. Please try again.");
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
    <div id="ContactFormContainer" className={styles.container}>
      <div className={styles.main}>
        <input
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          value={subject}
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <textarea
          value={message}
          placeholder="Message"
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
        <button type="button" onClick={handleSubmit} disabled={submitDisabled}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

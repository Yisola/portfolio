import { useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';


export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [shouldShowMessage, setShouldShowMessage] = useState(false);
  const [shouldShowErrorMessage, setShouldShowErrorMessage] = useState(false);


  // set secret to the environment variables 
  const emailjsUserId = process.env.REACT_APP_USER_ID;
  const emailjsTemplateId = process.env.REACT_APP_TEMPLATE_ID;

  const handleSubmit = (e) => {
    e.preventDefault();

    // clearing the values
    setEmail("");
    setMessage("");
    setShouldShowMessage(false);
    setShouldShowErrorMessage(false)



    emailjs.sendForm('service_6sqqu3g', emailjsTemplateId, e.target, emailjsUserId)
      .then((result) => {

        setShouldShowMessage(true);
        // alert("Message Sent, We will get back to you shortly", result.text);
      },

        (error) => {
          // alert("An error occurred, Please try again " + error.text);
          setShouldShowErrorMessage(true);
          console.log(error)
        });
  };


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>

      <div className="right">
        <h2>Contact.</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">Send</button>
          {shouldShowMessage && <span>Thanks, I'll reply ASAP :)</span>}
          {shouldShowErrorMessage && <span>An error occured, Please try again.</span>}
        </form>
      </div>
    </div>
  );
}
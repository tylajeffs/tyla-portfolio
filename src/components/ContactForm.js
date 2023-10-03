import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import "../css/contact-form.css";



function ContactForm() {

    const form = useRef();
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef =  useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")

        sendEmail()
    }

    const sendEmail = (e) => {
     
        emailjs.sendForm('service_sgrte7g', 'template_lhxqmdm', form.current, 'VuX2OLGQUT0EzVc6w')
          .then((result) => {
              // show the user a success message
          }, (error) => {
              // show the user an error
          });
      };


  return (

    <div className="contact-form-container">

        <form ref={form}onSubmit={handleSubmit} className="form-horizontal">

            <label for="name">Name</label>
            <input
                    type="text"
                    name="name"
                    className="form-control"
                    ref={nameRef} 
                    tabIndex="1"
            />


            <label for="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="example@corp.com"
                ref={emailRef}
                tabIndex="2"
            />

            <label for="message">Message</label>
            <textarea
                placeholder="Start typing..."
                className="form-control"
                ref={messageRef}
                name="message"
            />

            <button type="submit" className="send-button">Send</button>

        </form>
      


    </div>

  );
};

export default ContactForm;
import React, { useRef} from 'react';
import "../css/contact-form.css";


function ContactForm() {


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
    }


  return (

    <div className="contact-form-container">

        <form onSubmit={handleSubmit} className="form-horizontal">

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
import React, { useEffect, useState } from "react";
import Nav from "../home/Nav";
import { sendEmail } from "../ServerComponents/sendEmail";
import { validateEmail, validateFullName, validateMessage } from "../ServerComponents/Validation";
import Loading from "../ServerComponents/Loading";

function Contact() {
  // Initialize fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState();

  // Initialize error messages
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [messageError, setMessageError] = useState();

  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    /* -------------- VALIDATE FIELDS ------------------ */
    validateFullName({ fullName, setFullNameError });
    validateEmail({ email, setEmailError });
    validateMessage({ message, setMessageError });

    if (send) {
      setFullName("");
      setEmail("");
      setMessage("");
      setSend();
    }
  }, [fullName, email, message, send]);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!fullNameError & !emailError & !messageError) {
      sendEmail({ fullName, email, message, setSend }).then(() => {
        console.log(process.env.USER + " " + process.env.PASSWORD + " " + process.env.RECIPIENT);
        console.log("Sent");
        setLoading(false);
        setButtonLoading(false);
      });
    }
  };

  return (
    <div>
      <Nav />
      {loading ? (
        <Loading />
      ) : (
        <div className="contact">
          <h1 className="contact-header">Contact</h1>
          <h3 className="need-a-site">Need a website or looking to hire?</h3>
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 col-xs-1 col-sm-3 col-lg-4">
                <div id="contact" className="contact-icons">
                  <a href="https://www.linkedin.com/in/andrew-igbeinkutu" target="_blank">
                    <i className="contact-icon fa fa-2x fa-linkedin"></i>
                  </a>
                  <a href="https://www.facebook.com/igbeinkutuandrew" target="_blank">
                    <i className="contact-icon fa fa-2x fa-facebook"></i>
                  </a>
                  <a href="https://www.twitter.com/IgbeinkutuAndre" target="_blank">
                    <i className="contact-icon fa fa-2x fa-twitter"></i>
                  </a>
                  <a href="https://github.com/andytheo" target="_blank">
                    <i className="contact-icon fa fa-2x fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="col-4 col-sm-4">
                <form className="form-class" onSubmit={submitHandler}>
                  <div>
                    <input
                      className="mb-3 contact-form"
                      type="text"
                      // name="fullName"
                      placeholder="Enter name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    {<div className="text-danger ml-4">{fullNameError}</div>}
                  </div>
                  <div>
                    <input
                      className="mb-3 contact-form"
                      type="email"
                      // name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {<div className="text-danger ml-4">{emailError}</div>}
                  </div>
                  <div>
                    <textarea
                      className="contact-form"
                      style={{ resize: "none" }}
                      // name="message"
                      rows="5"
                      cols="40"
                      placeholder="Enter message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {<div className="text-danger ml-4">{messageError}</div>}
                  </div>

                  <button className="btn btn-sm btn-light contact-button" type="submit" name="button" disabled={buttonLoading && true}>
                    {buttonLoading ? "Loading..." : "Send message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;

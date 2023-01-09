// const [sent, setSent] = useState(false);
// const [text, setTest] = useState("");

// const handleSend = async () => {
//   setSent(true);
//   try {
//     await axios.post("http://localhost:3000/send_mail", {
//       text
//     })
//   } catch (e) {
//     console.log(e);
//   }
// }
import React, { useState } from "react"
import Nav from "../home/Nav"

function Contact() {
return (
  <div>
    <Nav />
    <div className="contact">
      <h1 className="contact-header">Contact</h1>
      <h3 className="need-a-site">Need a website or looking to hire?</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 col-xs-1 col-sm-3 col-lg-4">
            <div id="contact" className="contact-icons">
              <a href="https://www.linkedin.com/in/andrew-igbeinkutu-28081816b" target="_blank"><i className="contact-icon fa fa-2x fa-linkedin"></i></a>
              <a href="https://www.facebook.com/igbeinkutuandrew" target="_blank"><i className="contact-icon fa fa-2x fa-facebook"></i></a>
              <a href="https://www.twitter.com/IgbeinkutuAndre" target="_blank"><i className="contact-icon fa fa-2x fa-twitter"></i></a>
              <a href="https://github.com/andytheo" target="_blank"><i className="contact-icon fa fa-2x fa-github"></i></a>
              <a href="https://wa.link/wr2u4t" target="_blank"><i className="contact-icon fa fa-2x fa-whatsapp"></i></a>
            </div>
          </div>
        <div className="col-4 col-sm-4">
          <form className="form-class">
            <input className="mb-3 contact-form" type="text" name="name" placeholder="Enter name" />
            <input className="mb-3 contact-form" type="email" name="email" placeholder="Enter email" />
            <textarea className="contact-form" style={{resize: "none"}} name="text" rows="5" cols="40" placeholder="Enter message"></textarea>
            <button className="btn btn-sm btn-light contact-button" type="submit" name="button">Send message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
)
}

export default Contact

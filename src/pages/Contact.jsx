import React from 'react';
import './Contact.css';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <section className="contact-section">
        <h2>Contact Us</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Visit Our Store</h3>
          <p>📍 123 Nature Street, Coimbatore, Tamil Nadu</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@naturalglow.in</p>
          <div className="social-links">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;

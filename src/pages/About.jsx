import React from 'react';
import './About.css';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

function About() {
  return (
    <div className="about-page">
      <Header />
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          At <strong>Natural Glow</strong>, we believe in purity and tradition. Our oils are 
          cold-pressed using age-old methods to retain their full nutritional value and aroma. 
          We source our ingredients from organic farms across India, ensuring every drop 
          is free from chemicals and preservatives.
        </p>
      </section>

      <section className="benefits-section">
        <h2>Why Choose Our Oils?</h2>
        <ul>
          <li>🌿 100% Pure & Unrefined – No additives or artificial processing</li>
          <li>💪 Rich in natural antioxidants and essential fatty acids</li>
          <li>🌱 Sustainably sourced from trusted local farmers</li>
          <li>👩‍⚕️ Recommended for heart health, skin nourishment & immunity</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default About;

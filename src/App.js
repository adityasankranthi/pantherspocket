import logo from './logo.svg';
import React from 'react';
import './App.css';  // Import the CSS file

function App() {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src="/assets/logo.png" alt="Company Logo" className="logo" />
          <h1>Panther Pockets</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1>Crispy, Fresh, and Made with Love!</h1>
          <button>Order Now</button>
        </section>

        {/* About Us Section */}
        <section className="about">
          <h2>Our Story</h2>
          <p>At Samosa Squad, we’re passionate about bringing the taste of authentic Indian street food to Milwaukee. What started as a group of college students sharing their love of samosas has grown into a local favorite!</p>
        </section>

        {/* Menu Section */}
        <section className="menu">
          <h2>Our Menu</h2>
          <div className="menu-item">
            <h3>Potato & Peas Samosa</h3>
            <p>$3</p>
          </div>
          <div className="menu-item">
            <h3>Spicy Chicken Samosa</h3>
            <p>$4</p>
          </div>
          <button>View Full Menu</button>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What People Are Saying</h2>
          <p>best samosa” – UWM Student</p>
        </section>

        {/* Contact Us Section */}
        <section className="contact">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
          <p>Call us at: (123) 456-7890</p>
          <p>Email: info@samosasquad.com</p>
        </section>
      </main>

      <footer>
        {/* Add footer content if needed */}
      </footer>
    </div>
  );
}

export default App;


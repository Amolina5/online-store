import React from 'react';
import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to Retro Arcade!</h1>
        <p>Your destination for classic games and nostalgia.</p>
      </header>
      <main className="content">
        <section id="games" className="games-section">
          <h2>Featured Games</h2>
          <div className="games-grid">
            <div className="game-card">
              <img src="https://th.bing.com/th/id/OIP.V_862Ai8AcMGJzCDLkEkogHaDt?w=284&h=174&c=7&r=0&o=5&pid=1.7" alt="Mario" className="game-character" /> 
              <p>Mario</p>
            </div>
            <div className="game-card">
              <img src="https://th.bing.com/th/id/OIP.B7vJ0xIU1DLcmnL0ea8w1QHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7" alt="Pac-Man" className="game-character" /> 
              <p>Pac-Man</p>
            </div>
            <div className="game-card">
              <img src="https://th.bing.com/th/id/OIP.coATeETq5xn5Cqbu-9C12QHaLT?w=131&h=199&c=7&r=0&o=5&pid=1.7" alt="Sonic" className="game-character" /> 
              <p>Sonic</p>
            </div>
            <div className="game-card">
              <img src="https://th.bing.com/th/id/OIP.UL8Ram2WTdIlxt_sD1K0hwAAAA?w=248&h=187&c=7&r=0&o=5&pid=1.7" alt="Donkey Kong" className="game-character" /> 
              <p>Donkey Kong</p>
            </div>
            <div className="game-card">
              <img src="https://th.bing.com/th/id/OIP.mAvnch5GwOEXi3UAvyQDugHaEK?w=282&h=180&c=7&r=0&o=5&pid=1.7" alt="Link" className="game-character" /> 
              <p>Link</p>
            </div>
          </div>
        </section>
        <section id="events" className="events-section">
          <h2>Upcoming Events</h2>
          <ul className="events-list">
            <li>Retro Gaming Tournament - March 15, 2025</li>
            <li>Arcade Night - April 10, 2025</li>
            <li>Console Classics Marathon - May 5, 2025</li>
          </ul>
        </section>
        <section id="testimonials" className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonial">
            <p>"Retro Arcade is the best place to relive my childhood memories!" - Alex</p>
          </div>
          <div className="testimonial">
            <p>"Amazing collection of games and a great atmosphere!" - Jamie</p>
          </div>
        </section>
        <section id="newsletter" className="newsletter-section">
          <h2>Stay Updated</h2>
          <p>Sign up for our newsletter to get the latest news and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
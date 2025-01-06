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
        <section className="games-section">
          <h2>Featured Games</h2>
          <ul className="games-list">
            <li>Mario</li>
            <li>Mortal Kombat</li>
            <li>Taxi Driver</li>
            <li>Pac-Man</li>
            <li>Street Fighter</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>About Us</h2>
          <p>
            We specialize in providing the best retro gaming experience. 
            From arcades to consoles, we've got it all! 
            Join us for tournaments, events, and a blast from the past!
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>© 2023 Retro Arcade Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
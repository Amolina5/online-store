import React from 'react';
import './styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Retro Arcade</h1>
      </header>
      <main className="about-content">
        <section className="about-intro">
          <p>
            At Retro Arcade, we celebrate the golden age of gaming! Our store is filled with classic arcade machines, consoles, and games from the '80s and '90s. Join us for tournaments and relive those nostalgic moments!
          </p>
        </section>
        <section className="about-history">
          <h2>Our History</h2>
          <p>
            Founded in 2020, Retro Arcade started as a small passion project by a group of gaming enthusiasts. Over the years, it has grown into a beloved destination for gamers of all ages. Our mission is to preserve the legacy of classic games and provide a space where people can enjoy them together.
          </p>
        </section>
        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            We aim to create a community where gamers can connect, compete, and share their love for retro games. Whether you're a seasoned player or new to the world of classic gaming, Retro Arcade offers something for everyone.
          </p>
        </section>
        <section className="about-events">
          <h2>Events and Tournaments</h2>
          <p>
            We host regular events and tournaments, bringing together gamers from all over. From high-score challenges to themed nights, there's always something exciting happening at Retro Arcade. Check our events calendar and join us for the next big event!
          </p>
        </section>
        <section className="about-contact">
          <h2>Contact Us</h2>
          <p>
            Have questions or want to learn more about Retro Arcade? Reach out to us at <a href="mailto:info@retroarcade.com">info@retroarcade.com</a>. We're always happy to hear from fellow gaming enthusiasts!
          </p>
        </section>
      </main>
      <footer className="about-footer">
        <p>© 2023 Retro Arcade Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
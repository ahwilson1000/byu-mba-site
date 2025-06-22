import React from "react";
import "./index.css";

export default function RecruiterSite() {
  return (
    <main className="container">
      <section className="center">
        <img src="/headshot.jpg" alt="Adjetey Wilson" className="avatar" />
        <h1>Adjetey (AJ) Wilson</h1>
        <p>Student Recruiter | BYU MBA Program</p>
      </section>

      <section>
        <p>
          Hi, my name is Adjetey (AJ) Wilson, and I'm a second-year student in BYU's MBA program.
          I was born in Benin, West Africa, and raised in Detroit and Romulus, Michigan. I currently
          reside in Provo with my wife and kids. I like watching UFC, Anime, playing sports, and learning.
        </p>
      </section>

      <section>
        <h2>How I Can Help You</h2>
        <ul>
          <li>Learn if BYU MBA is the right fit for you</li>
          <li>Get personalized application advice</li>
          <li>Gain networking tips and insights</li>
          <li>Understand program culture from an insider's perspective</li>
        </ul>
      </section>

      <section>
        <h2>Contact Me</h2>
        <p>Email me at <a href="mailto:ahwilson@byu.edu">ahwilson@byu.edu</a></p>
      </section>

      <section>
        <h2>Learn More</h2>
        <p>Visit the <a href="https://marriott.byu.edu/mba/" target="_blank" rel="noreferrer">official BYU MBA Website</a>.</p>
      </section>

      <section>
        <h2>Testimonials</h2>
        <p>Coming soon...</p>
      </section>

      <section>
        <h2>Blog / Updates</h2>
        <p>Coming soon...</p>
      </section>
    </main>
  );
}

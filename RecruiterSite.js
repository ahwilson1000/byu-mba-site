import React from "react";
import "./styles.css";

export default function RecruiterSite() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <section className="text-center mb-8">
        <img
          src="headshot.jpg"
          alt="Adjetey Wilson Headshot"
          className="mx-auto rounded-full w-40 h-40 object-cover mb-4 shadow-md"
        />
        <h1 className="text-3xl font-bold">Adjetey (AJ) Wilson</h1>
        <p className="text-lg text-gray-600 mt-1">Student Recruiter | BYU MBA Program</p>
      </section>

      <section className="mb-10">
        <p className="text-gray-800 text-lg">
          Hi, my name is Adjetey (AJ) Wilson, and I'm a second-year student in BYU's MBA program.
          I was born in Benin, West Africa, and raised in Detroit and Romulus, Michigan. I currently
          reside in Provo with my wife and kids. I like watching UFC, Anime, playing sports, and learning.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">How I Can Help You</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Learn if BYU MBA is the right fit for you</li>
          <li>Get personalized application advice</li>
          <li>Gain networking tips and insights</li>
          <li>Understand program culture from an insider's perspective</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-2">
          Please email me at <a href="mailto:ahwilson@byu.edu" className="text-blue-600 hover:underline">ahwilson@byu.edu</a>
          if you want to discuss BYU's MBA program.
        </p>
        <a href="mailto:ahwilson@byu.edu" className="btn">Email Me</a>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
        <p className="text-lg text-gray-700 mb-2">
          For official details about the program, visit the <a
            href="https://marriott.byu.edu/mba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >BYU MBA Website</a>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <p className="text-gray-500">Coming soon...</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Blog / Updates</h2>
        <p className="text-gray-500">Coming soon...</p>
      </section>
    </main>
  );
}

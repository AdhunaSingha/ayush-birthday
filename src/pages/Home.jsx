import React from "react";
import FlowButton from "../components/FlowButton";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">

      <div className="home-stars"></div>

      <main className="home-content">

        <p className="home-access">
          SPECIAL ACCESS GRANTED
        </p>

        <h1>AYUSH</h1>

        <div className="home-level">
          LEVEL 22
        </div>

        <p className="home-date">
          08 • 10 • 2026
        </p>

        <h2>
          HAPPY BIRTHDAY, PUGLU BABA <span>❤️</span>
        </h2>

        <p className="home-intro">
          A little world created by Chavu,
          <br />
          exclusively for you.
        </p>

        <div className="home-start">
          <FlowButton to="/puglu-kingdom">
            ENTER THE WORLD →
          </FlowButton>
        </div>

        <p className="home-hint">
          YOUR ADVENTURE BEGINS HERE
        </p>

      </main>

    </div>
  );
}

export default Home;
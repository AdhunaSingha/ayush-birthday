import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/database.css";

const modes = [
  {
    id: 1,
    icon: "⚡",
    title: "CHAOTIC MODE",
    shortTitle: "Chaotic",
    color: "#9cff63",
    description:
      "Maximum Puglu chaos detected. Behaviour unpredictable. Chavu patience required.",
    image: "/photos/puglu-chaotic.png",
  },
  {
    id: 2,
    icon: "♡",
    title: "CUTE MODE",
    shortTitle: "Cute",
    color: "#ffb7d5",
    description:
      "Soft Puglu detected. Excessive cuteness levels. Handle with hugs.",
    image: "/photos/puglu-cute.png",
  },
  {
    id: 3,
    icon: "☠",
    title: "ANNOYING MODE",
    shortTitle: "Annoying",
    color: "#ffd45c",
    description:
      "Annoyance protocol activated. Puglu may disturb Chavu without warning.",
    image: "/photos/puglu-annoying.png",
  },
  {
    id: 4,
    icon: "✦",
    title: "SOFT MODE",
    shortTitle: "Soft",
    color: "#9edcff",
    description:
      "Low-volume Puglu detected. Quiet smiles, warm hugs and peaceful moments.",
    image: "/photos/puglu-soft.png",
  },
  {
    id: 5,
    icon: "♥",
    title: "BOYFRIEND MODE",
    shortTitle: "Boyfriend",
    color: "#ff8f9d",
    description:
      "Boyfriend protocol active. Permanently assigned to Chavu.",
    image: "/photos/puglu-boyfriend.png",
  },
];

function PugluDatabase() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);
  const [transforming, setTransforming] = useState(false);

  const mode = modes[selected];

  const changeMode = (direction) => {
    if (transforming) return;

    const nextIndex =
      (selected + direction + modes.length) % modes.length;

    setTransforming(true);

    setTimeout(() => {
      setSelected(nextIndex);
    }, 220);

    setTimeout(() => {
      setTransforming(false);
    }, 700);
  };

  const selectMode = (index) => {
    if (transforming || index === selected) return;

    setTransforming(true);

    setTimeout(() => {
      setSelected(index);
    }, 220);

    setTimeout(() => {
      setTransforming(false);
    }, 700);
  };

  return (
    <main
      className={`database-page ${
        transforming ? "is-transforming" : ""
      }`}
      style={{
        "--mode-color": mode.color,
      }}
    >
      {/* BACKGROUND */}
      <div className="database-grid"></div>
      <div className="database-scanlines"></div>
      <div className="database-noise"></div>

      {/* =====================================================
          TOP HUD
      ====================================================== */}

      <header className="database-header">
        <div className="database-id">
          <strong>PG-001</strong>
          <span>PERSONALITY TRANSFORMATION SYSTEM</span>
        </div>

        <div className="database-name">
          PUGLU DATABASE
        </div>

        <div className="database-status">
          <span></span>
          SYSTEM ONLINE
        </div>
      </header>

      {/* =====================================================
          TITLE
      ====================================================== */}

      <section className="database-heading">
        <p>CLASSIFIED PERSONALITY ARCHIVE</p>

        <h1>PUGLU DATABASE</h1>
      </section>

      {/* =====================================================
          MAIN SCANNER + WATCH
      ====================================================== */}

      <section className="database-watch-area">

        {/* =================================================
            HOLOGRAM
        ================================================== */}

        <div className="hologram-area">

          <div className="hologram-frame">

            {/* Corners */}
            <div className="scanner-corner scanner-top-left"></div>
            <div className="scanner-corner scanner-top-right"></div>
            <div className="scanner-corner scanner-bottom-left"></div>
            <div className="scanner-corner scanner-bottom-right"></div>

            {/* Header */}
            <div className="hologram-label">
              {mode.title}
            </div>

            <div className="hologram-number">
              PERSONALITY 0{mode.id}
            </div>

            {/* Actual image */}
            <img
              key={mode.image}
              src={mode.image}
              alt={`${mode.title} Ayush sticker`}
              className="hologram-sticker"
            />

            {/* Glow */}
            <div className="hologram-glow"></div>

            {/* Scan line */}
            <div className="hologram-scan-line"></div>

            {/* Small scan text */}
            <div className="hologram-status">
              <span>SUBJECT</span>
              <strong>AYUSH</strong>
            </div>

          </div>

          {/* Beam underneath hologram */}
          <div className="hologram-beam"></div>

          {/* Projection platform */}
          <div className="hologram-base">
            <span></span>
          </div>

        </div>

        {/* =================================================
            3D WATCH
        ================================================== */}

        <div className="watch-side-3d">

          {/* Shadow */}
          <div className="watch-shadow"></div>

          {/* Rear thickness */}
          <div className="watch-back"></div>

          {/* Main shell */}
          <div className="watch-shell">

            {/* Top highlight */}
            <div className="watch-top-bevel"></div>

            {/* Front screen */}
            <div className="watch-surface">

              <div className="watch-icon">
                {mode.icon}
              </div>

              <div className="watch-subject">
                <span>SUBJECT</span>
                <strong>AYUSH</strong>
              </div>

              <div className="watch-scan-light"></div>

            </div>

            {/* Bottom bevel */}
            <div className="watch-bottom-bevel"></div>

            {/* Outer rim */}
            <div className="watch-rim"></div>

            {/* Side buttons */}
            <div className="watch-side-button button-one"></div>
            <div className="watch-side-button button-two"></div>
            <div className="watch-side-button button-three"></div>

          </div>

          {/* =================================================
              NAVIGATION BUTTONS
              These are deliberately FAR outside the watch.
          ================================================== */}

          <button
            type="button"
            className="watch-control-3d watch-left"
            onClick={() => changeMode(-1)}
            aria-label="Previous personality"
          >
            ‹
          </button>

          <button
            type="button"
            className="watch-control-3d watch-right"
            onClick={() => changeMode(1)}
            aria-label="Next personality"
          >
            ›
          </button>

        </div>

      </section>

      {/* =====================================================
          MODE INFORMATION
      ====================================================== */}

      <section className="database-mode-info">

        <div className="mode-icon-box">
          {mode.icon}
        </div>

        <div className="mode-copy">

          <p>
            TRANSFORMATION 0{mode.id}
          </p>

          <h2>
            {mode.title}
          </h2>

          <span>
            {mode.description}
          </span>

        </div>

      </section>

      {/* =====================================================
          FIVE MODES
      ====================================================== */}

      <section className="database-selector">

        {modes.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`mode-selector ${
              index === selected ? "active" : ""
            }`}
            onClick={() => selectMode(index)}
            style={{
              "--item-color": item.color,
            }}
          >

            <small>
              0{item.id}
            </small>

            <strong>
              {item.icon}
            </strong>

            <span>
              {item.shortTitle}
            </span>

          </button>
        ))}

      </section>

      {/* =====================================================
          DIAL INSTRUCTION
      ====================================================== */}

      <div className="dial-instruction">

        <button
          type="button"
          onClick={() => changeMode(-1)}
          aria-label="Previous mode"
        >
          ◀
        </button>

        <span>
          DIAL TO TRANSFORM
        </span>

        <button
          type="button"
          onClick={() => changeMode(1)}
          aria-label="Next mode"
        >
          ▶
        </button>

      </div>

      {/* =====================================================
          NEXT SCREEN
      ====================================================== */}

      <button
        type="button"
        className="classified-button"
        onClick={() =>
          navigate("/air-force-archive")
        }
      >
        OPEN CLASSIFIED FILE

        <span>
          →
        </span>
      </button>

    </main>
  );
}

export default PugluDatabase;
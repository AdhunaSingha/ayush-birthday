import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/birthday.css";

function Birthday() {
  const navigate = useNavigate();

  const [blownCandles, setBlownCandles] = useState([]);
  const [celebrated, setCelebrated] = useState(false);

  const totalCandles = 22;

  const toggleCandle = (number) => {
    if (blownCandles.includes(number)) return;

    const updated = [...blownCandles, number];
    setBlownCandles(updated);

    if (updated.length === totalCandles) {
      setTimeout(() => {
        setCelebrated(true);
      }, 700);
    }
  };

  const resetCandles = () => {
    setBlownCandles([]);
    setCelebrated(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        resetCandles();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="birthday-page">

      <div className="birthday-stars"></div>

      <header className="birthday-header">
        <p className="birthday-label">FINAL CELEBRATION</p>

        <h1>HAPPY BIRTHDAY</h1>

        <p className="birthday-subtitle">
          PUGLU BABA • LEVEL 22
        </p>
      </header>

      {!celebrated ? (
        <section className="cake-section">

          <div className="birthday-instruction">
            <span>MAKE A WISH</span>
            <p>
              Click every candle to blow out
              <br />
              all <strong>22</strong> of them.
            </p>
          </div>

          <div className="candle-counter">
            <span>{blownCandles.length}</span>
            <small>/ 22 CANDLES</small>
          </div>

          <div className="cake-wrapper">

            <div className="candles">

              {Array.from({ length: totalCandles }, (_, index) => {
                const number = index + 1;
                const isBlown = blownCandles.includes(number);

                return (
                  <button
                    key={number}
                    type="button"
                    className={`candle ${isBlown ? "blown" : ""}`}
                    onClick={() => toggleCandle(number)}
                    aria-label={`Candle ${number}`}
                  >
                    {!isBlown && <span className="flame"></span>}

                    <span className="candle-stick">
                      <span className="candle-number">
                        {number}
                      </span>
                    </span>
                  </button>
                );
              })}

            </div>

            <div className="cake">

              <div className="cake-top">
                <div className="cake-icing"></div>
              </div>

              <div className="cake-middle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="cake-bottom">
                <div className="cake-plate"></div>
              </div>

            </div>

          </div>

          <p className="birthday-progress">
            {blownCandles.length === 0
              ? "22 little wishes waiting for you..."
              : `${22 - blownCandles.length} candles left`}
          </p>

        </section>
      ) : (
        <section className="celebration">

          <div className="celebration-burst">
            <span>✦</span>
            <span>♥</span>
            <span>✧</span>
            <span>★</span>
            <span>♡</span>
            <span>✦</span>
          </div>

          <div className="celebration-card">

            <p className="celebration-small">
              ALL 22 CANDLES ARE OUT
            </p>

            <h2>MAKE A WISH,<br />PUGLU BABA. ❤️</h2>

            <p>
              I hope every little wish you make
              finds its way to you.
            </p>

            <p>
              And if one of those wishes happens
              to be about us...
            </p>

            <div className="celebration-heart">
              ♥
            </div>

            <p className="celebration-love">
              I already made mine.
            </p>

            <button
              type="button"
              className="birthday-continue"
              onClick={() => navigate("/final")}
            >
              ONE LAST THING →
            </button>

          </div>

        </section>
      )}

    </main>
  );
}

export default Birthday;
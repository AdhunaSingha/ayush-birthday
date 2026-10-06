import React, { useEffect, useState } from "react";
import "../styles/final.css";

function Final() {
  const [started, setStarted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const revealMessage = () => {
    setShowMessage(true);
  };

  return (
    <main className={`final-page ${started ? "started" : ""}`}>

      <div className="final-glow"></div>

      <div className="final-stars"></div>

      {/* floating hearts */}
      <div className="final-floating-hearts">
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>✦</span>
        <span>♡</span>
        <span>♥</span>
      </div>

      {!showMessage ? (
        <section className="final-intro">

          <p className="final-eyebrow">
            ACCESSING FINAL MEMORY...
          </p>

          <div className="final-heart">
            ♥
          </div>

          <h1>
            ONE LAST<br />
            THING
          </h1>

          <div className="final-line"></div>

          <p className="final-subtitle">
            Before you leave this little world...
          </p>

          <button
            type="button"
            className="final-reveal-button"
            onClick={revealMessage}
          >
            OPEN MY HEART
          </button>

        </section>
      ) : (
        <section className="final-message">

          <p className="final-letter-label">
            FOR PUGLU BABA
          </p>

          <div className="final-big-heart">
            ♥
          </div>

          <h1>
            HAPPY<br />
            BIRTHDAY,
            <br />
            AYUSH.
          </h1>

          <div className="final-divider">
            <span>✦</span>
            <span>♡</span>
            <span>✦</span>
          </div>

          <div className="final-letter">

            <p>
              If you ever wonder how much you mean to me,
              I hope you remember this little world.
            </p>

            <p>
              I made every screen, every memory,
              every tiny detail because you are
              someone worth celebrating.
            </p>

            <p>
              From October 2023 to today,
              we've collected so many little pieces
              of a life that is ours.
            </p>

            <p>
              The silly moments.
              <br />
              The arguments.
              <br />
              The laughter.
              <br />
              The quiet moments.
              <br />
              The memories I never want to lose.
            </p>

            <p className="final-special">
              And somehow, through all of it...
              <br />
              it's still you.
            </p>

            <p>
              So here's to 22.
              <br />
              To everything you've already become,
              and everything that's still waiting for you.
            </p>

            <p>
              I hope this year is kind to you.
              I hope you achieve the things you dream about.
              And I hope, somewhere along the way,
              I get to keep making memories with you.
            </p>

            <p className="final-love">
              I love you, Puglu Baba.
            </p>

            <p className="final-signature">
              Forever your Chavu
              <br />
              <span>♥</span>
            </p>

          </div>

          <div className="final-ending">
            <span>08 • 10 • 2026</span>
            <small>END OF PROGRAM</small>
          </div>

        </section>
      )}

    </main>
  );
}

export default Final;
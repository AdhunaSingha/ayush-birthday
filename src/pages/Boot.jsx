import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/boot.css";

function Boot() {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/boot.mp3");

    audio.loop = true;
    audio.volume = 0.45;

    audio.play().catch(() => {
      // Browser may block autoplay until the user interacts.
    });

    const timer = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(timer);
          setReady(true);
          return 100;
        }

        return current + 2;
      });
    }, 45);

    return () => {
      clearInterval(timer);

      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const enterWebsite = () => {
    navigate("/home");
  };

  return (
    <main className="boot-screen">

      <section className="boot-content">

        <div className="boot-title">
          AYUSH.EXE
        </div>

        <div className="boot-line">
          INITIALIZING SPECIAL BIRTHDAY PROGRAM...
        </div>

        <div className="boot-line">
          PLAYER DETECTED: AYUSH
        </div>

        <div className="boot-line">
          CODENAME: PUGLU BABA
        </div>

        <div className="boot-line">
          ACCESS: CHAVU ❤️
        </div>

        <div className="boot-progress">
          <div
            className="boot-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="boot-percent">
          {progress}%
        </div>

        {ready && (
          <button
            type="button"
            className="pixel-button"
            onClick={enterWebsite}
          >
            PRESS ENTER
          </button>
        )}

      </section>

    </main>
  );
}

export default Boot;
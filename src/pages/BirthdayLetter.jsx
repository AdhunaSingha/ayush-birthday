import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/letter.css";

function BirthdayLetter() {
  const navigate = useNavigate();

  const [opened, setOpened] = useState(false);

  /* =================================================
     LETTER MUSIC
  ================================================= */

  useEffect(() => {
    const audio = new Audio("/music/letter.mp3");

    audio.loop = true;
    audio.volume = 0.45;

    audio.play().catch(() => {
      // Browser may block autoplay until user interaction.
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <main className="letter-page">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="letter-glow" />
      <div className="letter-grain" />
      <div className="letter-vignette" />


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="letter-header">

        <div className="letter-code">
          <strong>CHAVU // 08.10.26</strong>
          <span>PRIVATE CORRESPONDENCE</span>
        </div>

        <div className="letter-header-title">
          ONE LAST MESSAGE
        </div>

        <div className="letter-seal">
          ♥
        </div>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <section className="letter-main">

        <div className="letter-intro">

          <span>
            PERSONALLY DELIVERED TO
          </span>

          <h1>
            PUGLU BABA
          </h1>

          <p>
            A letter from your Chavu
          </p>

        </div>


        {/* =================================================
            ENVELOPE
        ================================================= */}

        {!opened && (

          <section className="envelope-area">

            <button
              type="button"
              className="envelope"
              onClick={() => setOpened(true)}
              aria-label="Open birthday letter"
            >

              <div className="envelope-shadow" />

              <div className="envelope-back" />

              <div className="envelope-paper">

                <div className="paper-lines" />

                <div className="paper-preview">
                  To my Puglu Baba,
                </div>

              </div>

              <div className="envelope-flap" />

              <div className="envelope-front" />

              <div className="letter-seal-button">
                ♥
              </div>

            </button>

            <p className="envelope-hint">
              CLICK THE LETTER TO OPEN
            </p>

          </section>

        )}


        {/* =================================================
            LETTER
        ================================================= */}

        {opened && (

          <section className="letter-sheet">

            <div className="paper-tape tape-left" />
            <div className="paper-tape tape-right" />


            {/* TOP */}

            <div className="letter-sheet-top">

              <span>
                08 OCTOBER 2026
              </span>

              <span>
                FOR AYUSH
              </span>

            </div>


            {/* CONTENT */}

            <article className="handwritten-letter">

              <p className="letter-dear">
                My Puglu Baba,
              </p>

              <p>
                Happy 22nd birthday to the person who
                somehow became such a huge part of my
                little world.
              </p>

              <p>
                When we started this journey in October
                2023, I don't think either of us knew how
                many memories, laughs, arguments, silly
                conversations and beautiful moments
                were waiting for us.
              </p>

              <p>
                Three years later, here we are.
                Still annoying each other.
                Still laughing at stupid things.
                Still finding our way through everything.
              </p>

              <p>
                You are not perfect, and neither am I.
                But somewhere between all our chaos,
                you became my favourite person to come
                back to.
              </p>

              <p>
                I hope this new year of your life brings
                you closer to everything you dream about.
                I hope you keep smiling, keep growing,
                keep being the ridiculous Puglu Baba
                that I know.
              </p>

              <p>
                And selfishly, I hope I get to be there
                for many more birthdays.which i know i can't be there.
              </p>

              <p>
                8 MONTHS MORE memories.
                <br />
                8 MONTHS MORE stupid fights.
                <br />
                8 MONTHS MORE laughter.
                <br />
                8 MONTHS MORE us.
              </p>

              <p>
                Thank you for being you.
              </p>

              <p className="letter-love">
                I love you, Puglu Baba.
                I KNOW I WONT BE THERE FOR YOUR BIRTHDAY AND I KNOW YOU WONT BE THERE FOR MINE 
                BUT I LOVE YOU AND I WISH YOU A HAPPY BIRTHDAY ANYMORE
              </p>

              <p className="letter-signature">
                Forever your Chavu
                <br />
                <span>♥</span>
              </p>

            </article>


            {/* FOOTER */}

            <div className="letter-sheet-footer">

              <span>
                PERSONAL ARCHIVE
              </span>

              <span>
                CHAVU × PUGLU
              </span>

              <span>
                FILE 22
              </span>

            </div>

          </section>

        )}


        {/* =================================================
            CONTINUE
        ================================================= */}

        {opened && (

          <button
            type="button"
            className="letter-continue"
            onClick={() => navigate("/birthday")}
          >
            LIGHT THE 22 CANDLES
            <b>→</b>
          </button>

        )}

      </section>


      {/* =================================================
          CORNER DATA
      ================================================= */}

      <div className="letter-corner letter-corner-left">
        FROM: CHAVU
        <br />
        TO: PUGLU BABA
      </div>

      <div className="letter-corner letter-corner-right">
        DATE: 08.10.2026
        <br />
        AGE: 22
      </div>

    </main>
  );
}

export default BirthdayLetter;
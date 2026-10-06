import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/memories.css";

const memories = [
  {
    id: 1,
    photo: "/photos/photo4.jpg",
    title: "THE BEGINNING",
    text: "Somewhere along the way, you became one of my favourite parts of life.",
  },
  {
    id: 2,
    photo: "/photos/photo5.jpg",
    title: "OUR LITTLE WORLD",
    text: "There are moments that only make sense because they happened with you.",
  },
  {
    id: 3,
    photo: "/photos/photo6.jpg",
    title: "THE LAUGHS",
    text: "Thank you for all the stupid jokes, random conversations and laughter.",
  },
  {
    id: 4,
    photo: "/photos/photo7.jpeg",
    title: "THE CHAOS",
    text: "Somehow even our chaotic moments became memories I want to keep forever.",
  },
  {
    id: 5,
    photo: "/photos/photo8.jpeg",
    title: "THE QUIET MOMENTS",
    text: "Not every beautiful memory needs a big moment. Sometimes just having you is enough.",
  },
  {
    id: 6,
    photo: "/photos/photo9.jpeg",
    title: "THAT SMILE",
    text: "A smile from you can still completely change the mood of my entire day.",
  },
  {
    id: 7,
    photo: "/photos/photo10.jpg",
    title: "US",
    text: "Three years gave us countless little stories, and I would choose every one again.",
  },
  {
    id: 8,
    photo: "/photos/photo11.jpg",
    title: "MY FAVOURITE PERSON",
    text: "Out of all the people in this huge world, somehow I found you.",
  },
  {
    id: 9,
    photo: "/photos/photo12.jpeg",
    title: "STILL HERE",
    text: "Through every laugh, argument, silly moment and everything between them — still us.",
  },
  {
    id: 10,
    photo: "/photos/photo13.jpeg",
    title: "FOREVER FILED",
    text: "This memory room may end, but our story definitely doesn't.",
  },
];

function Memories() {
  const navigate = useNavigate();

  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState(false);

  const current = memories[active];

  const nextMemory = () => {
    setOpened(false);

    setTimeout(() => {
      setActive((prev) =>
        (prev + 1) % memories.length
      );
    }, 180);
  };

  const previousMemory = () => {
    setOpened(false);

    setTimeout(() => {
      setActive((prev) =>
        (prev - 1 + memories.length) %
        memories.length
      );
    }, 180);
  };

  return (
    <main className="memories-page">

      {/* BACKGROUND */}

      <div className="memory-stars" />
      <div className="memory-grid" />
      <div className="memory-vignette" />


      {/* HEADER */}

      <header className="memory-header">

        <div className="memory-system">
          <strong>MEM-001</strong>
          <span>PERSONAL MEMORY ARCHIVE</span>
        </div>

        <div className="memory-header-title">
          MEMORY ROOM
        </div>

        <div className="memory-status">
          <i />
          ARCHIVE ACTIVE
        </div>

      </header>


      {/* MAIN */}

      <section className="memories-main">

        <div className="memory-intro">

          <span>
            CLASSIFIED MEMORIES // CHAVU × PUGLU
          </span>

          <h1>
            OUR MEMORY ROOM
          </h1>

          <p>
            Ten little pieces of our story.
          </p>

        </div>


        {/* =================================================
            PHOTO DISPLAY
        ================================================= */}

        <div className="memory-viewer">

          {/* LEFT */}

          <button
            type="button"
            className="memory-arrow memory-arrow-left"
            onClick={previousMemory}
            aria-label="Previous memory"
          >
            ‹
          </button>


          {/* PHOTO FRAME */}

          <div
            className={`memory-frame ${
              opened ? "memory-open" : ""
            }`}
          >

            <div className="memory-frame-top">
              <span>
                MEMORY FILE
              </span>

              <strong>
                {String(active + 1).padStart(2, "0")}
                /
                10
              </strong>
            </div>


            <div className="memory-photo-wrap">

              <div className="photo-corner photo-corner-tl" />
              <div className="photo-corner photo-corner-tr" />
              <div className="photo-corner photo-corner-bl" />
              <div className="photo-corner photo-corner-br" />

              <img
                src={current.photo}
                alt={current.title}
                className="memory-photo"
              />

              <div className="photo-scanline" />

              <div className="photo-overlay">
                MEMORY
                <br />
                ARCHIVED
              </div>

            </div>


            <div className="memory-frame-bottom">

              <div>
                <span>
                  FILE
                </span>

                <strong>
                  PG-{String(active + 1).padStart(2, "0")}
                </strong>
              </div>

              <div>
                <span>
                  SUBJECT
                </span>

                <strong>
                  AYUSH
                </strong>
              </div>

              <div>
                <span>
                  ACCESS
                </span>

                <strong>
                  CHAVU ♥
                </strong>
              </div>

            </div>

          </div>


          {/* RIGHT */}

          <button
            type="button"
            className="memory-arrow memory-arrow-right"
            onClick={nextMemory}
            aria-label="Next memory"
          >
            ›
          </button>

        </div>


        {/* =================================================
            MEMORY INFORMATION
        ================================================= */}

        <section
          className={`memory-caption ${
            opened ? "caption-open" : ""
          }`}
        >

          <span>
            MEMORY {String(active + 1).padStart(2, "0")}
          </span>

          <h2>
            {current.title}
          </h2>

          <p>
            {current.text}
          </p>

        </section>


        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="memory-timeline">

          {memories.map((memory, index) => (

            <button
              type="button"
              key={memory.id}
              className={
                index === active
                  ? "timeline-dot active"
                  : "timeline-dot"
              }
              onClick={() => {
                setOpened(false);
                setActive(index);
              }}
              aria-label={`Open memory ${index + 1}`}
            >
              <span />
            </button>

          ))}

        </div>


        {/* OPEN MEMORY */}

        <button
          type="button"
          className="open-memory-button"
          onClick={() =>
            setOpened((prev) => !prev)
          }
        >
          {opened
            ? "CLOSE MEMORY"
            : "OPEN MEMORY"}

          <b>
            {opened ? "×" : "→"}
          </b>
        </button>


        {/* CONTINUE */}

        {active === memories.length - 1 && (

          <button
            type="button"
            className="continue-memory-button"
            onClick={() =>
              navigate("/radio-chavu")
            }
          >
            CONTINUE TO RADIO CHAVU
            <b>→</b>
          </button>

        )}

      </section>


      {/* CORNER DATA */}

      <div className="memory-corner memory-corner-left">
        ARCHIVE: PG-001
        <br />
        FILES: 10
      </div>

      <div className="memory-corner memory-corner-right">
        CREATED: OCT 2023
        <br />
        OWNER: CHAVU
      </div>

    </main>
  );
}

export default Memories;
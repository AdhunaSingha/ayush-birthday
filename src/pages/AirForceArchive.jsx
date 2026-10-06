import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/archive.css";

function AirForceArchive() {
  const navigate = useNavigate();

  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <main className="archive-page">

      {/* BACKGROUND */}
      <div className="archive-sky" />
      <div className="archive-grid" />
      <div className="archive-scanlines" />

      {/* TOP BAR */}
      <header className="archive-header">

        <div>
          <strong>IAF-ARCHIVE // 22</strong>
          <span>PERSONAL CLASSIFIED RECORD</span>
        </div>

        <div className="archive-online">
          ● ARCHIVE ONLINE
        </div>

      </header>


      {/* MAIN CONTENT */}
      <section className="archive-container">

        {/* CLASSIFIED STAMP */}
        <div className="classified-stamp">
          CLASSIFIED
        </div>


        {/* TOP LABEL */}
        <div className="archive-eyebrow">
          INDIAN AIR FORCE
          <span>•</span>
          PERSONAL ARCHIVE
        </div>


        <h1>
          AIR FORCE
          <br />
          <span>ARCHIVE</span>
        </h1>


        <p className="archive-subtitle">
          SUBJECT DOSSIER // PUGLU BABA
        </p>


        {/* DOSSIER */}
        <section
          className={`dossier ${
            opened ? "dossier-open" : ""
          }`}
        >

          {/* =================================================
              LEFT — SUBJECT PHOTO
          ================================================== */}

          <div className="dossier-photo">

            <div className="photo-frame">

              <div className="photo-placeholder">

                {/* ACTUAL AYUSH PHOTO */}
                <img
                  src="/photos/photo-code.png"
                  alt="Ayush - Puglu Baba"
                  className="archive-subject-photo"
                />

                {/* PHOTO OVERLAY */}
                <div className="photo-overlay"></div>

                <span className="photo-label">
                  SUBJECT PHOTO
                </span>

              </div>

            </div>

            <div className="photo-code">
              SUBJECT // PG-001
            </div>

          </div>


          {/* =================================================
              RIGHT — PERSONNEL DETAILS
          ================================================== */}

          <div className="dossier-details">

            <div className="dossier-top">

              <span>
                PERSONNEL FILE
              </span>

              <strong>
                08 / 10 / 2004
              </strong>

            </div>


            <div className="name-block">

              <span>
                CODENAME
              </span>

              <h2>
                PUGLU BABA
              </h2>

              <p>
                AYUSH
              </p>

            </div>


            <div className="details-grid">

              <div>
                <span>DATE OF BIRTH</span>
                <strong>08 OCT 2004</strong>
              </div>

              <div>
                <span>CURRENT LEVEL</span>
                <strong>22</strong>
              </div>

              <div>
                <span>MISSION START</span>
                <strong>OCT 2023</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>ACTIVE</strong>
              </div>

            </div>


            <div className="archive-description">

              <span>FIELD NOTES</span>

              <p>
                Subject has successfully completed
                multiple years of making Chavu laugh,
                getting on her nerves, stealing her
                attention and somehow becoming one
                of the most important people in her
                world.
              </p>

            </div>


            {/* CLASSIFICATION */}
            <div className="classification-bar">

              <span>
                THREAT LEVEL
              </span>

              <div className="threat-bars">

                <i />
                <i />
                <i />
                <i />
                <i />

              </div>

              <strong>
                EXTREMELY CUTE
              </strong>

            </div>

          </div>

        </section>


        {/* MISSION CARD */}
        <section className="mission-card">

          <div className="mission-symbol">
            ✦
          </div>

          <div>

            <span>
              SPECIAL MISSION
            </span>

            <h3>
              OPERATION: KEEP HIM FOREVER
            </h3>

            <p>
              Mission initiated in October 2023.
              Current objective: collect every
              beautiful memory created together.
            </p>

          </div>

        </section>


        {/* BUTTON */}
        {!opened ? (

          <button
            type="button"
            className="archive-open-button"
            onClick={handleOpen}
          >

            <span>
              DECLASSIFY MEMORY ARCHIVE
            </span>

            <b>
              →
            </b>

          </button>

        ) : (

          <button
            type="button"
            className="archive-open-button archive-continue"
            onClick={() => navigate("/memories")}
          >

            <span>
              ENTER MEMORY ROOM
            </span>

            <b>
              →
            </b>

          </button>

        )}


        {/* BOTTOM NOTE */}
        <p className="archive-note">

          ACCESS GRANTED TO: CHAVU

          <span>
            ♥
          </span>

        </p>

      </section>


      {/* CORNER DATA */}

      <div className="archive-corner archive-corner-left">

        ARCHIVE ID: PG-001
        <br />

        SECURITY: CHAVU ONLY

      </div>


      <div className="archive-corner archive-corner-right">

        DOB: 08.10.2004
        <br />

        LEVEL: 22

      </div>

    </main>
  );
}

export default AirForceArchive;
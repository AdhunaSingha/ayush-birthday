import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/radio.css";

const stations = [
  {
    id: 1,
    title: "OUR SONG",
    artist: "FOR PUGLU BABA",
    description: "The song that reminds Chavu of you.",
    music: "/music/radio1.mp3",
    color: "#d8a85b",
  },
  {
    id: 2,
    title: "LATE NIGHT",
    artist: "02:17 AM",
    description: "For all those conversations that should have ended hours ago.",
    music: "/music/radio2.mp3",
    color: "#c58b62",
  },
  {
    id: 3,
    title: "SOFT HOURS",
    artist: "CHAVU × PUGLU",
    description: "A little soundtrack for our quiet moments.",
    music: "/music/radio3.mp3",
    color: "#b99a72",
  },
  {
    id: 4,
    title: "FOREVER PLAYLIST",
    artist: "MEMORY 04",
    description: "Press play whenever you want to remember us.",
    music: "/music/radio4.mp3",
    color: "#d0b17a",
  },
];

const radioPhotos = [
  "/photos/photo6.jpg",
  "/photos/photo8.jpeg",
  "/photos/photo10.jpg",
  "/photos/photo13.jpeg",
];

function RadioChavu() {
  const navigate = useNavigate();

  const audioRef = useRef(null);

  const [station, setStation] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.45);

  const current = stations[station];

  /* =====================================================
     STOP AUDIO WHEN PAGE CHANGES / COMPONENT UNMOUNTS
  ===================================================== */

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);


  /* =====================================================
     CHANGE STATION
  ===================================================== */

  const changeStation = (index) => {
    if (index === station) {
      togglePlay();
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setStation(index);
    setPlaying(false);
  };


  /* =====================================================
     PLAY / PAUSE
  ===================================================== */

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {
          setPlaying(false);
        });
    }
  };


  /* =====================================================
     VOLUME
  ===================================================== */

  const changeVolume = (event) => {
    const value = Number(event.target.value);

    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };


  /* =====================================================
     PHOTO CLICK
  ===================================================== */

  const handlePhotoClick = (index) => {
    const targetStation =
      index % stations.length;

    changeStation(targetStation);
  };


  return (
    <main
      className="radio-page"
      style={{
        "--radio-color": current.color,
      }}
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="radio-grain" />
      <div className="radio-vignette" />
      <div className="radio-light" />


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="radio-header">

        <div className="radio-code">
          <strong>CHV-88.8</strong>
          <span>CHAVU BROADCAST SYSTEM</span>
        </div>

        <div className="radio-title-small">
          RADIO CHAVU
        </div>

        <div className="radio-status">
          ● BROADCASTING
        </div>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <section className="radio-main">

        <div className="radio-intro">

          <span>
            SPECIAL FREQUENCY // PUGLU BABA
          </span>

          <h1>
            RADIO CHAVU
          </h1>

          <p>
            Some songs sound better when they remind
            you of someone.
          </p>

        </div>


        {/* =================================================
            RADIO
        ================================================= */}

        <section className="radio-console">


          {/* ANTENNA */}

          <div className="radio-antenna">

            <div className="antenna-line" />

            <span>
              •
            </span>

          </div>


          {/* RADIO BODY */}

          <div className="radio-body">


            {/* TOP */}

            <div className="radio-top">

              <span>
                CHAVU FM
              </span>

              <span>
                EST. 2023
              </span>

            </div>


            {/* DISPLAY */}

            <div className="radio-display">

              <div className="display-label">
                NOW PLAYING
              </div>

              <div className="display-song">
                {current.title}
              </div>

              <div className="display-artist">
                {current.artist}
              </div>

              <div className="display-frequency">
                88.8
              </div>

              <div
                className={`display-bars ${
                  playing ? "bars-playing" : ""
                }`}
              >
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>

            </div>


            {/* CONTROLS */}

            <div className="radio-controls">

              {/* PREVIOUS */}

              <button
                type="button"
                onClick={() =>
                  changeStation(
                    (station - 1 + stations.length) %
                    stations.length
                  )
                }
              >
                ◀◀
              </button>


              {/* PLAY */}

              <button
                type="button"
                className="radio-play"
                onClick={togglePlay}
              >
                {playing ? "Ⅱ" : "▶"}
              </button>


              {/* NEXT */}

              <button
                type="button"
                onClick={() =>
                  changeStation(
                    (station + 1) %
                    stations.length
                  )
                }
              >
                ▶▶
              </button>

            </div>


            {/* DIAL */}

            <div className="radio-dial-area">

              <div className="radio-dial">

                <div
                  className="dial-pointer"
                  style={{
                    transform:
                      `translateX(-50%) rotate(${
                        station * 70 - 105
                      }deg)`,
                  }}
                />

                <div className="dial-center">
                  CHV
                </div>

              </div>

              <div className="dial-labels">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
              </div>

            </div>


            {/* VOLUME */}

            <div className="radio-volume">

              <span>
                VOL
              </span>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={changeVolume}
              />

            </div>


            {/* SPEAKER */}

            <div className="radio-speaker">

              {Array.from({
                length: 48,
              }).map((_, index) => (
                <i key={index} />
              ))}

            </div>


            {/* BOTTOM */}

            <div className="radio-bottom">

              <span>
                LOVE TRANSMISSION ACTIVE
              </span>

              <span>
                ♥
              </span>

            </div>

          </div>

        </section>


        {/* =================================================
            CURRENT SONG
        ================================================= */}

        <section className="radio-now">

          <div className="now-icon">
            ♫
          </div>

          <div className="now-text">

            <span>
              CURRENT TRANSMISSION
            </span>

            <h2>
              {current.title}
            </h2>

            <p>
              {current.description}
            </p>

          </div>

          <div className="now-number">
            {String(station + 1).padStart(2, "0")}
            /
            {String(stations.length).padStart(2, "0")}
          </div>

        </section>


        {/* =================================================
            PHOTO MEMORIES
        ================================================= */}

        <section className="radio-memories">

          <div className="radio-section-title">

            <span>
              CLICK A MEMORY
            </span>

            <strong>
              PLAYLIST ARCHIVE
            </strong>

          </div>


          <div className="radio-photo-grid">

            {radioPhotos.map((photo, index) => (

              <button
                type="button"
                key={photo}
                className={`radio-photo ${
                  index === station
                    ? "photo-selected"
                    : ""
                }`}
                onClick={() =>
                  handlePhotoClick(index)
                }
              >

                <img
                  src={photo}
                  alt={`Radio memory ${index + 1}`}
                />

                <div className="radio-photo-overlay">

                  <span>
                    TRACK {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {stations[index].title}
                  </strong>

                  <b>
                    {index === station &&
                    playing
                      ? "♫ PLAYING"
                      : "▶ PLAY"}
                  </b>

                </div>

              </button>

            ))}

          </div>

        </section>


        {/* =================================================
            CONTINUE
        ================================================= */}

        <button
          type="button"
          className="radio-continue"
          onClick={() =>
            navigate("/birthday-letter")
          }
        >
          TURN THE PAGE
          <b>→</b>
        </button>

      </section>


      {/* =================================================
          AUDIO
      ================================================= */}

      <audio
        ref={audioRef}
        src={current.music}
        loop
        preload="auto"
        onEnded={() => setPlaying(false)}
      />


      {/* =================================================
          CORNER DATA
      ================================================= */}

      <div className="radio-corner radio-corner-left">
        FREQUENCY: 88.8
        <br />
        CALLSIGN: CHAVU
      </div>

      <div className="radio-corner radio-corner-right">
        SUBJECT: PUGLU
        <br />
        SIGNAL: ♥
      </div>

    </main>
  );
}

export default RadioChavu;
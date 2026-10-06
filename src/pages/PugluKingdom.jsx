import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/kingdom.css";

const coins = [
  {
    id: 1,
    x: 18,
    y: 28,
    photo: "/photos/photo1.jpg",
    title: "MEMORY 01",
    message: "One little moment with you that I never want to forget."
  },
  {
    id: 2,
    x: 72,
    y: 25,
    photo: "/photos/photo2.jpg",
    title: "MEMORY 02",
    message: "Another memory that makes me smile every single time."
  },
  {
    id: 3,
    x: 48,
    y: 68,
    photo: "/photos/photo3.mp4",
    title: "MEMORY 03",
    message: "A tiny piece of our story, saved here forever."
  }
];

const mushrooms = [
  {
    id: 1,
    x: 34,
    y: 53,
    title: "A LITTLE MESSAGE",
    message:
      "No matter how many birthdays come and go, I hope I always get to celebrate them with you. ❤️"
  },
  {
    id: 2,
    x: 82,
    y: 63,
    title: "A LITTLE MESSAGE",
    message:
      "You somehow became one of the most important parts of my world without me even realizing it."
  },
  {
    id: 3,
    x: 12,
    y: 70,
    title: "A LITTLE MESSAGE",
    message:
      "If I could save every happy moment we've had, I would keep an entire universe just for us."
  }
];

function PugluKingdom() {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    x: 50,
    y: 47
  });

  const [keys, setKeys] = useState({});

  const [collectedCoins, setCollectedCoins] = useState([]);
  const [collectedMushrooms, setCollectedMushrooms] = useState([]);

  const [popup, setPopup] = useState(null);

  /* --------------------------------
     KEYBOARD CONTROLS
  -------------------------------- */

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      if (
        [
          "arrowup",
          "arrowdown",
          "arrowleft",
          "arrowright",
          "w",
          "a",
          "s",
          "d"
        ].includes(key)
      ) {
        event.preventDefault();

        setKeys((previous) => ({
          ...previous,
          [key]: true
        }));
      }
    };

    const handleKeyUp = (event) => {
      const key = event.key.toLowerCase();

      setKeys((previous) => ({
        ...previous,
        [key]: false
      }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  /* --------------------------------
     PLAYER MOVEMENT
  -------------------------------- */

  useEffect(() => {
    const movement = setInterval(() => {
      setPlayer((current) => {
        let x = current.x;
        let y = current.y;

        const speed = 1.2;

        if (keys.arrowleft || keys.a) {
          x -= speed;
        }

        if (keys.arrowright || keys.d) {
          x += speed;
        }

        if (keys.arrowup || keys.w) {
          y -= speed;
        }

        if (keys.arrowdown || keys.s) {
          y += speed;
        }

        x = Math.max(5, Math.min(95, x));
        y = Math.max(12, Math.min(84, y));

        return { x, y };
      });
    }, 30);

    return () => clearInterval(movement);
  }, [keys]);

  /* --------------------------------
     COLLISION DETECTION
  -------------------------------- */

  useEffect(() => {
    const collisionDistance = 6;

    coins.forEach((coin) => {
      if (collectedCoins.includes(coin.id)) return;

      const distance = Math.sqrt(
        Math.pow(player.x - coin.x, 2) +
          Math.pow(player.y - coin.y, 2)
      );

      if (distance < collisionDistance) {
        setCollectedCoins((previous) => [
          ...previous,
          coin.id
        ]);

        setPopup({
          type: "photo",
          ...coin
        });
      }
    });

    mushrooms.forEach((mushroom) => {
      if (collectedMushrooms.includes(mushroom.id)) return;

      const distance = Math.sqrt(
        Math.pow(player.x - mushroom.x, 2) +
          Math.pow(player.y - mushroom.y, 2)
      );

      if (distance < collisionDistance) {
        setCollectedMushrooms((previous) => [
          ...previous,
          mushroom.id
        ]);

        setPopup({
          type: "message",
          ...mushroom
        });
      }
    });
  }, [
    player,
    collectedCoins,
    collectedMushrooms
  ]);

  const allCollected =
    collectedCoins.length === 3 &&
    collectedMushrooms.length === 3;

  /* --------------------------------
     MOBILE CONTROLS
  -------------------------------- */

  const pressDirection = (direction) => {
    setKeys((previous) => ({
      ...previous,
      [direction]: true
    }));
  };

  const releaseDirection = (direction) => {
    setKeys((previous) => ({
      ...previous,
      [direction]: false
    }));
  };

  return (
    <main className="kingdom-page">

      <div className="kingdom-cloud cloud-one">
        ☁️
      </div>

      <div className="kingdom-cloud cloud-two">
        ☁️
      </div>

      <div className="kingdom-sun"></div>

      <section className="kingdom-game">

        {/* HEADER */}

        <div className="kingdom-header">

          <div>
            <span>WORLD 01</span>
            <strong>PUGLU KINGDOM</strong>
          </div>

          <div className="kingdom-progress">

            <span>
              🪙 {collectedCoins.length}/3
            </span>

            <span>
              🍄 {collectedMushrooms.length}/3
            </span>

          </div>

        </div>

        {/* GAME WORLD */}

        <div className="game-world">

          {/* CLOUDS */}

          <div className="world-cloud world-cloud-one">
            ☁️
          </div>

          <div className="world-cloud world-cloud-two">
            ☁️
          </div>

          {/* HILLS */}

          <div className="hill hill-one"></div>
          <div className="hill hill-two"></div>

          {/* TREES */}

          <div className="tree tree-one">
            🌳
          </div>

          <div className="tree tree-two">
            🌳
          </div>

          <div className="tree tree-three">
            🌲
          </div>

          {/* COINS */}

          {coins.map((coin) => {

            const collected =
              collectedCoins.includes(coin.id);

            if (collected) return null;

            return (
              <div
                key={`coin-${coin.id}`}
                className="collectible coin"
                style={{
                  left: `${coin.x}%`,
                  top: `${coin.y}%`
                }}
              >
                🪙
              </div>
            );
          })}

          {/* MUSHROOMS */}

          {mushrooms.map((mushroom) => {

            const collected =
              collectedMushrooms.includes(mushroom.id);

            if (collected) return null;

            return (
              <div
                key={`mushroom-${mushroom.id}`}
                className="collectible mushroom"
                style={{
                  left: `${mushroom.x}%`,
                  top: `${mushroom.y}%`
                }}
              >
                🍄
              </div>
            );
          })}

          {/* FLOWERS */}

          <div className="flower flower-one">
            🌸
          </div>

          <div className="flower flower-two">
            🌼
          </div>

          <div className="flower flower-three">
            🌷
          </div>

          {/* PLAYER */}

          <div
            className="player-character"
            style={{
              left: `${player.x}%`,
              top: `${player.y}%`
            }}
          >
            <div className="player-shadow"></div>

            <div className="player-sprite">

              <div className="player-head"></div>

              <div className="player-body"></div>

              <div className="player-leg left"></div>
              <div className="player-leg right"></div>

            </div>
          </div>

          {/* GROUND */}

          <div className="game-ground"></div>

        </div>

        {/* MOBILE CONTROLS */}

        <div className="mobile-controls">

          <button
            type="button"
            onPointerDown={() =>
              pressDirection("arrowleft")
            }
            onPointerUp={() =>
              releaseDirection("arrowleft")
            }
            onPointerLeave={() =>
              releaseDirection("arrowleft")
            }
          >
            ◀
          </button>

          <div className="vertical-controls">

            <button
              type="button"
              onPointerDown={() =>
                pressDirection("arrowup")
              }
              onPointerUp={() =>
                releaseDirection("arrowup")
              }
              onPointerLeave={() =>
                releaseDirection("arrowup")
              }
            >
              ▲
            </button>

            <button
              type="button"
              onPointerDown={() =>
                pressDirection("arrowdown")
              }
              onPointerUp={() =>
                releaseDirection("arrowdown")
              }
              onPointerLeave={() =>
                releaseDirection("arrowdown")
              }
            >
              ▼
            </button>

          </div>

          <button
            type="button"
            onPointerDown={() =>
              pressDirection("arrowright")
            }
            onPointerUp={() =>
              releaseDirection("arrowright")
            }
            onPointerLeave={() =>
              releaseDirection("arrowright")
            }
          >
            ▶
          </button>

        </div>

        <p className="kingdom-instruction">
          WALK AROUND AND FIND ALL 3 COINS + 3 MUSHROOMS
        </p>

        {/* CONTINUE */}

        {allCollected && (
          <div className="kingdom-complete">

            <p>
              ✨ KINGDOM COMPLETE ✨
            </p>

            <button
              type="button"
              className="flow-button"
              onClick={() =>
                navigate("/puglu-database")
              }
            >
              ENTER THE NEXT WORLD →
            </button>

          </div>
        )}

      </section>

      {/* POPUP */}

      {popup && (
        <div className="kingdom-popup-overlay">

          <div className="kingdom-popup">

            <button
              type="button"
              className="popup-close"
              onClick={() => setPopup(null)}
            >
              ×
            </button>

            {popup.type === "photo" ? (
              <>
                <p className="popup-label">
                  🪙 MEMORY UNLOCKED
                </p>

                <h2>{popup.title}</h2>

                {/* JPG / MP4 SUPPORT */}
                {popup.photo.endsWith(".mp4") ? (
                  <video
                    src={popup.photo}
                    className="memory-unlocked-video"
                    controls
                    autoPlay
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={popup.photo}
                    alt={popup.title}
                    className="memory-unlocked-photo"
                    onError={(event) => {
                      event.currentTarget.style.display =
                        "none";
                    }}
                  />
                )}

                <p>
                  {popup.message}
                </p>
              </>
            ) : (
              <>
                <p className="popup-label">
                  🍄 MESSAGE UNLOCKED
                </p>

                <h2>{popup.title}</h2>

                <p className="beautiful-message">
                  {popup.message}
                </p>
              </>
            )}

            <button
              type="button"
              className="popup-continue"
              onClick={() => setPopup(null)}
            >
              CONTINUE
            </button>

          </div>

        </div>
      )}

    </main>
  );
}

export default PugluKingdom;
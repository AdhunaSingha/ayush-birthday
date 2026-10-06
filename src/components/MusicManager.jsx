import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const musicMap = {
  "/home": "/music/home.mp3",
  "/puglu-kingdom": "/music/kingdom.mp3",
  "/puglu-database": "/music/database.mp3",
  "/air-force-archive": "/music/archive.mp3",
  "/memories": "/music/memories.mp3",
  "/birthday-letter": "/music/letter.mp3",
  "/birthday": "/music/birthday.mp3",
  "/final": "/music/birthday.mp3"
};

function MusicManager() {
  const location = useLocation();
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    const audio = audioRef.current;
    const newTrack = musicMap[location.pathname];

    if (!newTrack) {
      audio.pause();
      return;
    }

    if (!audio.src.includes(newTrack)) {
      audio.src = newTrack;

      audio.play().catch(() => {
        console.log(
          "Audio waiting for user interaction."
        );
      });
    }

  }, [location.pathname]);

  return null;
}

export default MusicManager;
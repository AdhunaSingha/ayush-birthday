import { Routes, Route } from "react-router-dom";

import Boot from "./pages/Boot";
import Home from "./pages/Home";
import PugluKingdom from "./pages/PugluKingdom";
import PugluDatabase from "./pages/PugluDatabase";
import AirForceArchive from "./pages/AirForceArchive";
import Memories from "./pages/Memories";
import RadioChavu from "./pages/RadioChavu";
import BirthdayLetter from "./pages/BirthdayLetter";
import Birthday from "./pages/Birthday";
import Final from "./pages/Final";

import MusicManager from "./components/MusicManager";

function App() {
  return (
    <>
      <MusicManager />

      <Routes>
        <Route path="/" element={<Boot />} />

        <Route path="/home" element={<Home />} />

        <Route
          path="/puglu-kingdom"
          element={<PugluKingdom />}
        />

        <Route
          path="/puglu-database"
          element={<PugluDatabase />}
        />

        <Route
          path="/air-force-archive"
          element={<AirForceArchive />}
        />

        <Route
          path="/memories"
          element={<Memories />}
        />

        <Route
          path="/radio-chavu"
          element={<RadioChavu />}
        />

        <Route
          path="/birthday-letter"
          element={<BirthdayLetter />}
        />

        <Route
          path="/birthday"
          element={<Birthday />}
        />

        <Route
          path="/final"
          element={<Final />}
        />
      </Routes>
    </>
  );
}

export default App;
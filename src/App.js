import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Page1 from "./pages/Start/Page1";
import Page2 from "./pages/Start/Page2";
import Page3 from "./pages/Level1/Page3";
import Page3a from "./pages/Level1/Page3a";
import Page3b from "./pages/Level1/Page3b";
import Page4 from "./pages/Level2/Page4";
import Page4a from "./pages/Level2/Page4a";
import Page4b from "./pages/Level2/Page4b";
import Page4c from "./pages/Level2/Page4c";
import Page4d from "./pages/Level2/Page4d";
import Page4e from "./pages/Level2/Page4e";
import Page5 from "./pages/Level3/Page5";
import Page6 from "./pages/Level3/Page6";
import Page6a from "./pages/Level3/Page6a";
import Page6b from "./pages/Level3/Page6b";
import Page7 from "./pages/Level4/Page7";
import Page8 from "./pages/Level4/Page8";
import Page4f from "./pages/Level2/Page4f";
import Page4g from "./pages/Level2/Page4g";
import Page4h from "./pages/Level2/Page4h";
import Page4i from "./pages/Level2/Page4i";
import Page4j from "./pages/Level2/Page4j";
import Page11 from "./pages/Warning/Page11";
import Page12 from "./pages/Level6/Page12";
import Page13 from "./pages/Level7/Page13";
import IntroAudio from "./components/IntroAudio";
import FullScreenButton from "./components/FullScreenButton";
import { useScore } from './components/ScoreContext';
import { ToastContainer } from 'react-toastify';
import Page25 from "./pages/Level1/Page25";
import Page35 from "./pages/Level2/Page35";
import Page115 from "./pages/Warning/Page115";
import Page116 from "./pages/Warning/Page116";
import Page117 from "./pages/Warning/Page117";
import Page118 from "./pages/Warning/Page118";
import Page14 from "./pages/Level7/Page14";
import Page14a from "./pages/Level7/Page14a";
import Page14b from "./pages/Level7/Page14b";
import Page14c from "./pages/Level7/Page14c";
import Page14d from "./pages/Level7/Page14d";
import Page14e from "./pages/Level7/Page14e";
import Page14f from "./pages/Level7/Page14f";
import Page14g from "./pages/Level7/Page14g";
import Page14h from "./pages/Level7/Page14h";
import Page14i from "./pages/Level7/Page14i";
import Page14j from "./pages/Level7/Page14j";
import Page14k from "./pages/Level7/Page14k";
import Page14l from "./pages/Level7/Page14l";
import Page15 from "./pages/Warning/Page15";
import Page125 from "./pages/Level7/Page125";
import Gameroom from "./pages/Level4/Gameroom";
import Game from "./pages/Level4/Game";
import RitualRoom1 from "./pages/Level7/RitualRoom1";
import RitualRoom2 from "./pages/Level7/RitualRoom2";
import RitualRoom3 from "./pages/Level7/RitualRoom3";
import Youaredead from "./pages/Dead/Youaredead";
import End from "./pages/Warning/End";

import Thankyou from "./pages/Thanks/Thankyou";

function App() {
  const { score } = useScore();
  return (
    <Router>
      <div style={{height:"100vh"}}>
        <div style={{position:"absolute", bottom:"5px", left:"5px", cursor:"pointer", zIndex:"100"}}>
        <IntroAudio/>
        </div>
        <div style={{position:"absolute", top:"5px", left:"5px", width:"25%", zIndex:"100"}}>
          <FullScreenButton/>
        </div>
        <div style={{position:"absolute", top:"20px", right:"5px", width:"10%", zIndex:"90"}} className="score-display">health: {score}</div>
        <ToastContainer/>
        <Routes>
        <Route path="/virtual_escape_room/" element={<Page1 />} />
          <Route path="/virtual_escape_room/page2" element={<Page2 />} />
          <Route path="/virtual_escape_room/page25" element={<Page25 />} />
          <Route path="/virtual_escape_room/page3" element={<Page3 />} />
          <Route path="/virtual_escape_room/page3a" element={<Page3a />} />
          <Route path="/virtual_escape_room/page3b" element={<Page3b />} />
          <Route path="/virtual_escape_room/page35" element={<Page35 />} />
          <Route path="/virtual_escape_room/page4" element={<Page4 />} /> 
          <Route path="/virtual_escape_room/page4a" element={<Page4a />} />
          <Route path="/virtual_escape_room/page4b" element={<Page4b />} />
          <Route path="/virtual_escape_room/page4c" element={<Page4c />} />
          <Route path="/virtual_escape_room/page4d" element={<Page4d />} />
          <Route path="/virtual_escape_room/page4e" element={<Page4e />} />
          <Route path="/virtual_escape_room/page4f" element={<Page4f />} />
          <Route path="/virtual_escape_room/page4g" element={<Page4g />} />
          <Route path="/virtual_escape_room/page4h" element={<Page4h />} />
          <Route path="/virtual_escape_room/page4i" element={<Page4i />} />
          <Route path="/virtual_escape_room/page4j" element={<Page4j />} />
          <Route path="/virtual_escape_room/page5" element={<Page5 />} />
          <Route path="/virtual_escape_room/page6" element={<Page6 />} />
          <Route path="/virtual_escape_room/page6a" element={<Page6a />} />
          <Route path="/virtual_escape_room/page6b" element={<Page6b />} />
          <Route path="/virtual_escape_room/page7" element={<Page7 />} />
          <Route path="/virtual_escape_room/page8" element={<Page8 />} />
          <Route path="/virtual_escape_room/gameroom" element={<Gameroom />} />
          <Route path="/virtual_escape_room/game" element={<Game/>} />
          <Route path="/virtual_escape_room/page11" element={<Page11 />} />
          <Route path="/virtual_escape_room/page115" element={<Page115 />} />
          <Route path="/virtual_escape_room/page116" element={<Page116 />} />
          <Route path="/virtual_escape_room/page117" element={<Page117 />} />
          <Route path="/virtual_escape_room/page118" element={<Page118 />} />
          <Route path="/virtual_escape_room/end" element={<End/>} />
          <Route path="/virtual_escape_room/page12" element={<Page12 />} />
          <Route path="/virtual_escape_room/page13" element={<Page13 />} />
          <Route path="/virtual_escape_room/RitualRoom1" element={<RitualRoom1 />} />
          <Route path="/virtual_escape_room/RitualRoom2" element={<RitualRoom2 />} />
          <Route path="/virtual_escape_room/RitualRoom3" element={<RitualRoom3 />} />
          <Route path="/virtual_escape_room/page14" element={<Page14 />} />
          <Route path="/virtual_escape_room/page14a" element={<Page14a />} />
          <Route path="/virtual_escape_room/page14b" element={<Page14b />} />
          <Route path="/virtual_escape_room/page14c" element={<Page14c />} />
          <Route path="/virtual_escape_room/page14d" element={<Page14d />} />
          <Route path="/virtual_escape_room/page14e" element={<Page14e />} />
          <Route path="/virtual_escape_room/page14f" element={<Page14f />} />
          <Route path="/virtual_escape_room/page14g" element={<Page14g />} />
          <Route path="/virtual_escape_room/page14h" element={<Page14h />} />
          <Route path="/virtual_escape_room/page14i" element={<Page14i />} />
          <Route path="/virtual_escape_room/page14j" element={<Page14j />} />
          <Route path="/virtual_escape_room/page14k" element={<Page14k />} />
          <Route path="/virtual_escape_room/page14l" element={<Page14l />} />
          <Route path="/virtual_escape_room/thankyou" element={<Thankyou />} />
          <Route path="/virtual_escape_room/page15" element={<Page15 />} />
          <Route path="/virtual_escape_room/page125" element={<Page125 />} />
          <Route path="/virtual_escape_room/youaredead" element={<Youaredead />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

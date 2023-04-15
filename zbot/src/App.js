import React from "react";
import { BrowserRouter, Routes, Router, Route} from "react-router-dom";

import "./index.css";
import Home from ".Home/Home";
import ChatRoom from "./ChatRoom/ChatRom";

function App(){
  return(
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId" component={ChatRoom} />
      </Routes>
    </Router>
  );
}
export default App;

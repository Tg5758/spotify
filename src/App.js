import React from "react";
// import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import PlayList from "./component/PlayList";
// const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<PlayList />} />    
      </Routes>
    </Router>
  );
}

export default App;

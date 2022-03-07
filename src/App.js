import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [mode, setMode] = useState('light');
  const toggel = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }

  const [progress, setProgress] = useState(0);
  const changeProgress = (value1) => {
    setProgress(value1)
  }

  const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <NavBar toggel={toggel} mode={mode} />
        <Routes>
          <Route exact path="/" element={<News changeProgress={changeProgress} apiKey={apiKey} mode={mode} key="general" pageSize={6} country='in' category="general" />} />
          <Route exact path="/business" element={<News changeProgress={changeProgress} apiKey={apiKey} mode={mode} key="business" pageSize={6} country='in' category="business" />} />
          <Route exact path="/entertainment" element={<News changeProgress={changeProgress} apiKey={apiKey} mode={mode} key="entertainment" pageSize={6} country='in' category="entertainment" />} />
          <Route exact path="/general" element={<News changeProgress={changeProgress} apiKey={apiKey} mode={mode} key="general" pageSize={6} country='in' category="general" />} />
          <Route exact path="/health" element={<News changeProgress={changeProgress} apiKey={apiKey} mode={mode} key="health" pageSize={6} country='in' category="health" />} />
          <Route exact path="/science" element={<News changeProgress={changeProgress} apiKey={apiKey} mode={mode} key="science" pageSize={6} country='in' category="science" />} />
          <Route exact path="/sports" element={<News changeProgress={changeProgress} apiKey={apiKey} mode={mode} key="sports" pageSize={6} country='in' category="sports" />} />
          <Route exact path="/technology" element={<News changeProgress={changeProgress} apiKey={apiKey} mode={mode} key="technology" pageSize={6} country='in' category="technology" />} />
        </Routes>
      </BrowserRouter>,
    </>
  );
}

export default App;

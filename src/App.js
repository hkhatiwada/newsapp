import Navbar from "./components/Navbar";
import { News } from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react';




function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div className="App">
      <Router >
      <Navbar/>
      <LoadingBar
        color='#f11946'
        height={6}
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} key='general' pageSize={6} country='us' category='general' />}></Route>
        <Route path='/science' element={<News setProgress={setProgress} key='a' pageSize={6} country='us' category='science' />}></Route>
        <Route path='/technology' element={<News setProgress={setProgress} key='b' pageSize={6} country='us' category='technology' />}></Route>
        <Route path='/general' element={<News setProgress={setProgress} key='c' pageSize={6} country='in' category='general'/>}></Route>
        <Route path='/business' element={<News setProgress={setProgress} key='d' pageSize={6} country='us' category='business' />}></Route>
        <Route path='/entertainment' element={<News setProgress={setProgress} key='e' pageSize={6} country='us' category='entertainment' />}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import { News } from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<News key='general' pageSize={6} country='us' category='general' />}></Route>
        <Route path='/science' element={<News key='a' pageSize={6} country='us' category='science' />}></Route>
        <Route path='/technology' element={<News key='b' pageSize={6} country='us' category='technology' />}></Route>
        <Route path='/general' element={<News key='c' pageSize={6} country='in' category='general' />}></Route>
        <Route path='/business' element={<News key='d' pageSize={6} country='us' category='business' />}></Route>
        <Route path='/entertainment' element={<News key='e' pageSize={6} country='us' category='entertainment' />}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;

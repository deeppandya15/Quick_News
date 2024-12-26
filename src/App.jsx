import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
// import {
//   BrowserRouter as Router, Routes, Route
// } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';


function App() {

  const [navLoading, setNavLoading] = useState(0)
  // const newsapi = import.meta.env.VITE_NEWS_API;      //accessing Api from .env file 
  const newsapi = '07a16766db8c27d085f39154babf7690'
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={navLoading}   //it changes its value as we upadte it using state.
          onLoaderFinished={() => setNavLoading(0)}   //it sets loading bar to 0 after loading finished.
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"general"} pagesize={5} country={"us"} category={"general"} />}></Route>
          <Route exact path='/business' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"business"} pagesize={5} country={"us"} category={"business"} />}></Route>
          <Route exact path='/entertainment' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"entertainment"} pagesize={5} country={"us"} category={"entertainment"} />}></Route>
          <Route exact path='/health' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"health"} pagesize={5} country={"us"} category={"health"} />}></Route>
          <Route exact path='/science' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"science"} pagesize={5} country={"us"} category={"science"} />}></Route>
          <Route exact path='/sports' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"sports"} pagesize={5} country={"us"} category={"sports"} />}></Route>
          <Route exact path='/technology' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"technology"} pagesize={5} country={"us"} category={"technology"} />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App

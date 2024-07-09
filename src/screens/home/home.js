import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../library/library';
import Feed from '../feed/feed';
import Player from '../player/player';
import Favorites from '../favorites/favorites';
import Trending from '../trending/trending';
import "./home.css"
import Playbar from '../../components/playbar/playbar';
import Login from '../auth/login';
import { setClientToken } from '../../spotify';


export default function Home() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);


  return (!token ? 
        <Login/> :
    <div class='main_body'>
      <Router>
          <Routes >
              <Route path='/library' element={<Library/>}/>
              <Route path='/feed' element={<Feed/>}/>
              <Route path='/trending' element={<Trending/>}/>
              <Route path='/player' element={<Player/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
          </Routes>
          <Playbar/>
      </Router>
    </div>
  )
}
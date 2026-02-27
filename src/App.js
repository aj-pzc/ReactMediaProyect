import Header from "./components/Header";
import AllSongs from "./components/AllSongs";
import UserPlaylist from "./components/UserPlaylist";
import SearchResults from "./components/SearchResults";
import React, { useState } from "react";

import './App.css';

function App() {
  const songsDB = [
    { id: 1, title: "Die For You", artist: "The Weeknd", album:"First", duration: "4:20", genre:"" },
    { id: 2, title: "Blinding Lights", artist: "The Weeknd", album:"First", duration: "3:20" , genre:"" },
    { id: 3, title: "São Paulo", artist: "The Weeknd", album:"First", duration: "5:02", genre:""  },
    { id: 4, title: "Timeless", artist: "The Weeknd", album:"First", duration: "4:16", genre:"" },
    { id: 5, title: "The Hills", artist: "The Weeknd", album:"First", duration: "4:02", genre:"" },
    { id: 6, title: "Dog Days Are Over", artist: "Florence and the Machine", album:"First", duration: "4:12", genre:"" },
    { id: 7, title: "Buckle", artist: "Florence and the Machine", album:"First", duration: "3:23", genre:"" },
    { id: 8, title: "Free", artist: "Florence and the Machine", album:"First", duration: "3:54", genre:"" },
    { id: 9, title: "Cosmic Love", artist: "Florence and the Machine", album:"First", duration: "4:15", genre:"Alt" },
    { id: 10, title: "The Hills", artist: "The Weeknd", album:"two", duration: "4:02", genre:"" }
  ];

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (song) => {
    if (!favorites.some(fav => fav.id === song.id)) {
      setFavorites([...favorites, song]);
    }
  };

  return (
    <div className="App">
      <Header appName="MediaPlayerApp" />  
      <SearchResults songs={songsDB} onAddFav={addToFavorites} />
      <UserPlaylist favorites={favorites} />
      <AllSongs songs={songsDB} onAddFav={addToFavorites} /> 
    </div>
  );
}

export default App;

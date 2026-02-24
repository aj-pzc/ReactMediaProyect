import Header from "./components/Header/index";
import SongInfo from "./components/Songs/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header appName="MediaPlayerApp" />

    <div className="songList">
       <SongInfo
        title="Die For You" 
        artist="The Weeknd" 
        duration="4:20" 
      />
      <SongInfo
        title="Blinding Lights" 
        artist="The Weeknd" 
        duration="3:20" 
      />
      <SongInfo
        title="São Paulo" 
        artist="The Weeknd" 
        duration="5:02" 
      />
      <SongInfo
        title="Timeless"
        artist="The Weeknd" 
        duration="4:16" 
      />

      <SongInfo
        title="The Hills"
        artist="The Weeknd" 
        duration="4:02" 
      />


    </div>
    </div>
  );
}

export default App;

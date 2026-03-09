import React from 'react';
import { useParams } from 'react-router-dom'; 
import useGetDetails from '../../hooks/useGetDetails.js';
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';
import addPlaylist from '../Media/add.svg';
import removePlaylist from '../Media/remove.svg';


import {AddButton, AddIcon, AddPlaylist, Album, AlbumContainer, AlbumCover, AlbumInfo, AlbumTracks, TrackDuration, Tracks, TracksHeader, TrackTitles, } from "./styles.js";
import { FavButton, FavIcon,FavBox } from "../../Theme/GlobalStyles";


import { useDispatch, useSelector } from "react-redux";
import { AddSong, RemoveSong } from "../../Redux/librayActions";

const songTime = (millis) => {
  const minutes = Math.floor(millis / 60000);
  
  let seconds = Math.floor((millis % 60000) / 1000);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}

const AlbumDetails = ({onAddFav, favorites}) => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetDetails(id, "song");

  const dispatch = useDispatch();

  const playlist = useSelector(state => state);

  const handleTogglePlaylist = (song, onList) =>{

    if(onList){
        dispatch(RemoveSong(song.trackID));
    } else{
        const songDetails ={
            trackID: song.trackID,
            track: song.track,
            artist: song.artist,
            album: song.album,
            cover: song.cover
        }
        dispatch(AddSong(songDetails))        
    };
  };

  if (isLoading) return <p>Cargando álbum...</p>;
  if (error) return <p>Hubo un error.</p>;
  
  const albumInfo = data && data[0];
  const tracks = data ? data.slice(1) : [];

  return (
    <Album>
      <AlbumContainer>         
        
          {albumInfo && (
            <AlbumInfo>
              <AlbumCover 
                src={albumInfo.artworkUrl100.replace('100x100', '500x500')} 
                alt={albumInfo.collectionName} 
              />

              <h2>{albumInfo.collectionName}</h2>
              <p>{albumInfo.artistName}</p>
              <p>{albumInfo.releaseDate.slice(0, 10)}</p>
            </AlbumInfo>
          )}
        
        <AlbumTracks>
          <TracksHeader>
            <h3>Canciones:</h3>
          </TracksHeader>        
          
          {tracks.map(song => {
            const isFavorite = favorites.some(fav => fav.trackID === song.trackID);
            const onList = playlist.some(added => added.trackID === song.trackID);

            return(
            <Tracks key={song.trackId}>
              <TrackTitles>
                <p>
                  {song.trackNumber}. {song.track}
                </p>
              </TrackTitles>
              <TrackDuration>
                <p>{songTime(song.trackTimeMillis)}</p>
              </TrackDuration>
              <FavBox onClick={() => onAddFav(song)}>
                <FavButton>
                  <FavIcon 
                    src={isFavorite ? isFav:addFav} 
                    alt="favIcon"
                  />
                </FavButton>
              </FavBox>
              <AddPlaylist>
                <AddButton onClick={() => handleTogglePlaylist(song, onList)}>
                  <AddIcon src={onList ? removePlaylist:addPlaylist} alt="AddPlaylist"/>
                </AddButton>
              </AddPlaylist>


            </Tracks>
          )
            
          }
            )}
        </AlbumTracks>
      </AlbumContainer>
    </Album>
  );
};
export default AlbumDetails;
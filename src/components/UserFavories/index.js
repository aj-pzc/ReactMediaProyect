import React from "react";
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';
import removeIcon from '../Media/remove.svg';
import addIcon from '../Media/add.svg';


import { FavButton, FavIcon,FavBox } from "../../Theme/GlobalStyles";
import { ListHeader, UserList, ListContainer, ListItem, ListItemHeader, ItemBox, Cover, Playlist,  AddButton, AddIcon} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AddSong, RemoveSong } from "../../Redux/librayActions";

const UserFavorites = ({ favorites, onAddFav}) => {

    const dispatch = useDispatch();

    const playlist = useSelector(state => state);

    const handleTogglePlaylist = (song, onList) =>{
        if(onList){
            dispatch(RemoveSong(song.trackID))

        }else {
            const songDetails ={
                trackID: song.trackID,
                track: song.track,
                artist: song.artist,
                album: song.album,
                cover: song.cover
            }
            dispatch(AddSong (songDetails))
        }   
    }

    return (
        <UserList >
            <ListHeader>
                <h2>FAVORITES</h2>
            </ListHeader>

            <ListContainer>

                <ListItemHeader>
                        <Cover>
                            <p><strong>Album Cover</strong></p>
                        </Cover>
                        <ItemBox>
                           <p><strong>Track</strong></p>
                        </ItemBox>                                               
                        <ItemBox>
                            <p><strong>Artist</strong></p>
                        </ItemBox>
                        <ItemBox >
                            <p><strong>Album</strong></p>
                        </ItemBox> 
                        <FavBox >
                            <p><strong>Favorite</strong></p>
                        </FavBox>
                        <Playlist>
                            <p><strong>List</strong></p>    
                        </Playlist>                          
                </ListItemHeader>
                
                {favorites && favorites.length > 0 ? (
                favorites.map((song) => {
                    
                    const {trackID, artist, album, cover, track} = song;
                    const isFavorite = favorites.some(fav => fav.trackID === song.trackID);
                    const onList = playlist.some(added => added.trackID === trackID);

                    return(
                        
                        <ListItem key={trackID} >
                            <div >
                                 <img src={cover} alt={album}></img>
                            </div>
                            <ItemBox >
                                <p><strong>{track}</strong></p>
                            </ItemBox>
                            <ItemBox >
                                <p>{artist}</p>
                            </ItemBox>
                            <ItemBox >
                                <p>{album}</p>
                            </ItemBox>
                            <FavBox onClick={() => onAddFav(song)}>
                                <FavButton><FavIcon src={isFavorite ? isFav:addFav} alt="favIcon" id="AddtoFav"/></FavButton>
                            </FavBox>
                            <Playlist>
                                <AddButton onClick={() => handleTogglePlaylist(song, onList)}>
                                    <AddIcon 
                                        src={onList ? removeIcon : addIcon} 
                                        alt="AddIcon"
                                    />
                                </AddButton>
                            </Playlist>
                        </ListItem>
                    )
                }) 
            ) : (
                <p>No hay favoritos aún.</p>
                )}
                
            </ListContainer>

            
        </UserList>
    );
};

export default UserFavorites;
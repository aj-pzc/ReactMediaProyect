import React from "react";

const UserPlaylist = ({ favorites }) => {
    return (
        <section className="UserPlayList">
            <div className="UserPlayList__header">
                <h2>Mi Playlist</h2>
            </div>
            
            {favorites && favorites.length > 0 ? (
                favorites.map((song) => (
                    <article key={song.id} className="UserPlayList__each">
                        <p className="UserPlayList__each-title"><strong>{song.title}</strong></p>
                        <p className="UserPlayList__each-artist">{song.artist}</p>
                        <p className="UserPlayList__each-album">{song.album}</p>
                        <p className="UserPlayList__each-duration">{song.duration}</p>
                    </article>
                )) 
            ) : (
                <p>No hay favoritos aún.</p>
            )}
        </section>
    );
};

export default UserPlaylist;
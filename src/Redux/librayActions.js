const AddSong = (song) => ({
    type: 'ADD-SONG',
    payload: song
});

const RemoveSong = (trackID) => ({
    type: 'REMOVE-SONG',
    payload: trackID
});

export{
    AddSong,
    RemoveSong
}
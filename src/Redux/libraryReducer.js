import  "redux"

const initialState = [];

const PlaylistManager = (state = initialState, action) =>{

    switch (action.type){
        case 'ADD-SONG':
            const verifySong = state.find(song => song.trackID === action.payload.trackID);

            if(verifySong) return state;


            return [...state, action.payload];

        case 'REMOVE-SONG':

            return state.filter(song=> song.trackID !== action.payload);


        default:
            return state;

    }
};

export default PlaylistManager;

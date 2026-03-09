import {createStore} from "redux";
import PlaylistManager from "./libraryReducer";

const store = createStore(PlaylistManager);

export default store;
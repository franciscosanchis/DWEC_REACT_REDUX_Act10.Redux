import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Never Gonna Give You Up", duration: "3:33" },
    { title: "Unforgivven", duration: "5:12" },
    { title: "A question of time", duration: "4:47" },
    { title: "You're the best", duration: "2:48" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

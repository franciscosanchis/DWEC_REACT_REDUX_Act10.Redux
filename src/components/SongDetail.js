import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) return <div>Por favor selecciona una canción</div>;
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {selectedSong.title}
        <br></br>
        Duration: {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);

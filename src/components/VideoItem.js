import "./VideoItem.css";
import React from "react";

const VideoItem = () => {
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src="nonexistingurl"
        alt="Aquí va un thumbnail"
      />
      <div className="content">
        <div className="header">Aquí va el título</div>
      </div>
    </div>
  );
};

export default VideoItem;

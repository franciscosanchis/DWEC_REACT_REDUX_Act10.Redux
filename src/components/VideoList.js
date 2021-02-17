import React from "react";
import VideoItem from "./VideoItem";

const VideoList = () => {
  return (
    <div className="ui relaxed divided list">
      <VideoItem key="0" />
      <VideoItem key="1" />
      <VideoItem key="2" />
      <VideoItem key="3" />
    </div>
  );
};

export default VideoList;

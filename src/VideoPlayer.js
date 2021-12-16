import React, { useState } from "react";
import styled from "styled-components";
import Controls from "./Controls";
import Video from "./Video";

const StyledVideoPlayer = styled.div`
  padding: 10px;
  border: 1px solid black;
`;

const VideoPlayer = () => {
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);

  const handleLoadedMetadata = (event) => {
    setVideoDuration(event.target.duration);
  };

  const handleTimeUpdate = (event) => {
    setVideoCurrentTime(event.target.currentTime);
  };

  return (
    <StyledVideoPlayer>
      <Video
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />
      <Controls
        videoDuration={videoDuration}
        videoCurrentTime={videoCurrentTime}
      />
    </StyledVideoPlayer>
  );
};

export default VideoPlayer;

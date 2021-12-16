import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledVideo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = ({ onLoadedMetadata, onTimeUpdate }) => {
  const paused = useSelector((state) => state.paused);
  const videoRef = useRef(null);

  useEffect(() => {
    if (paused) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [paused]);

  return (
    <StyledVideo>
      <video
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </StyledVideo>
  );
};

export default Video;

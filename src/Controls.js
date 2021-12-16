import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { PLAY, PAUSE } from "./reducers/video-actions";
import Button from "./Button";
import SeekBar from "./SeekBar";

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 30px;
`;

const Buttons = styled.div`
  margin-right: 10px;
`;

const Controls = ({ videoDuration, videoCurrentTime }) => {
  const paused = useSelector((state) => state.paused);
  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch({ type: PAUSE });
  };

  const handlePlay = () => {
    dispatch({ type: PLAY });
  };

  return (
    <Wrapper className="Controls">
      <Buttons className="Buttons">
        {paused ? (
          <Button text="Play" onClick={handlePlay} />
        ) : (
          <Button text="Pause" onClick={handlePause} />
        )}
      </Buttons>
      <SeekBar totalTime={videoDuration} currentTime={videoCurrentTime} />
    </Wrapper>
  );
};

export default Controls;

import React from "react";
import styled from "styled-components";

const StyledSeekBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerBar = styled.div`
  transform: scaleX(${(props) => (props.currentTime / props.totalTime)});
  transform-origin: left;
  height: 100%;
  width: 100%;
  background: blue;
  transition: transform ease 300ms;
`;

const Info = styled.div`
    margin-left: 10px;
    width: 10%;
    float: right;
`;

const SeekBar = ({ totalTime, currentTime }) => {
  return (
    <StyledSeekBar className="SeekBar">
      <InnerBar
        className="InnerBar"
        currentTime={currentTime}
        totalTime={totalTime}
      />
      <Info className="Info">
          {parseInt(currentTime)} / {parseInt(totalTime)}
      </Info>
    </StyledSeekBar>
  );
};

export default SeekBar;

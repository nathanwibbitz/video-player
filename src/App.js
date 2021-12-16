import React from "react";
import VideoPlayer from "./VideoPlayer";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
`;

function App() {
  return (
    <Wrapper>
      <VideoPlayer />
    </Wrapper>
  );
}

export default App;

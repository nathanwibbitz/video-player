import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  padding: 4px 8px;
  border: 1px solid black;
  display: inline-block;
  cursor: pointer;
  &:hover {
      background: blue;
  }
`;

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;

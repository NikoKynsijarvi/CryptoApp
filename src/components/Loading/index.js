import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

function Loading() {
  return (
    <LoadingContainer>
      <h1>Loading...</h1>
    </LoadingContainer>
  );
}

export default Loading;

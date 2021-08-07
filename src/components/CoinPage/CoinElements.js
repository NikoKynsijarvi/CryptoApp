import styled from "styled-components";
import { Link } from "react-router-dom";

export const CoinContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  display: flex;
  color: white;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    height: 175vh;
    padding-bottom: 3em;
  }
`;

export const Row = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 50%;
  color: white;
  :after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  float: left;
  width: 50%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //border: 1px solid white; delete later
  @media screen and (max-width: 600px) {
    width: auto;
    height: 100%;
    max-height: 200px;
  }
`;

export const LinkHome = styled(Link)`
  height: 50px;
  width: 50px;
  background-color: rgb(0, 0, 0);
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 1em;
  margin-left: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinImage = styled.img`
  height: 60%;
`;

export const CoinRow = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 50%;
  color: white;
  justify-content: center;
  align-items: center;
  :after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const ColorH2 = styled.h2`
  font-size: 23px;
  color: ${({ positive }) => (positive ? "#00F900" : "#FF1717")};
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 23px;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const CoinStatsContainer = styled.div`
  position: relative;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 1.5em;
  padding: 1em;
  @media screen and (max-width: 600px) {
    column-count: 2;
    height: fit-content;
  }
`;

export const Stats = styled.div`
  height: 50px;
  width: 30%;
  border-bottom: 2px solid rgba(75, 192, 192, 1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  @media screen and (max-width: 600px) {
    width: 40%;
    height: 150px;
    flex-direction: column;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 1em;
`;

export const StyledButton = styled.button`
  color: white;
  background-color: black;
  min-width: 70px;
  border: 3px solid rgba(75, 192, 192, 1);
  cursor: pointer;
  :hover {
    filter: brightness(1.5);
  }
  @media screen and (max-width: 600px) {
    min-width: 40px;
  }
`;

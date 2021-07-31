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
    height: 150vh;
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
export const InfoTable = styled.table`
  height: 80%;
  width: 70%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    overflow-x: scroll;
    width: 80%;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const CoinTr = styled.tr`
  width: 100%;
  height: fit-content;
  display: flex;
  margin-bottom: 1em;
  border-bottom: 2px solid white;
  @media screen and (max-width: 600px) {
    margin-bottom: 0.5em;
  }
`;

export const CoinTh = styled.th`
  width: 200px;
  margin-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 200px;
  }
`;

export const ColorP = styled.p`
  color: ${({ positive }) => (positive ? "#00F900" : "#FF1717")};
`;

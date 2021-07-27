import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WelcomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
`;

export const BgImage = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const InfoRow = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: white;
  :after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const InfoColumn1 = styled.div`
  float: left;
  width: 70%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InfoColumn2 = styled.div`
  float: left;
  width: 30%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const CryptoHeader = styled.h1`
  font-size: 80px;

  color: #fff;
  @media screen and (max-width: 600px) {
    font-size: 50px;
  }
`;
export const InfoText = styled.p`
  font-size: 30px;
  color: #fff;
  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

export const CoinContainer = styled.div`
  height: 100px;
  width: 200px;
  background-color: rgb(255, 255, 255, 0.3);
  border-radius: 10%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    height: 80px;
    width: 150px;
    margin-top: 1em;
    background-color: rgb(255, 255, 255, 0.2);
  }
`;

export const CoinColumn = styled.div`
  float: left;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CoinSymbol = styled.h1`
  font-size: 25px;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const CoinCurrentPrice = styled.p`
  font-size: 20px;
  color: ${({ positive }) => (positive ? "#00F900" : "#FF1717")};
`;

export const AllCoinsContainer = styled.div`
  height: fit-content;
  padding-bottom: 3em;
  padding-top: 3em;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CoinsTable = styled.table`
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
  }
`;

export const CoinTr = styled.tr`
  width: 100%;
  height: fit-content;
  display: flex;
  margin-bottom: 0.5em;
  @media screen and (max-width: 600px) {
    margin-bottom: 0.2em;
  }
`;

export const CoinTh = styled.th`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinPriceTh = styled.th`
  width: 100px;
  color: ${({ positive }) => (positive ? "#00F900" : "#FF1717")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 50%;
  }
`;

export const PageButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid white;
  color: white;
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  transition: 0.3s ease-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const PageNumber = styled.p`
  font-size: 30px;
  color: rgb(255, 255, 255);
`;

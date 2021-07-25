import styled from "styled-components";

export const WelcomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
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

import React, { useEffect, useState } from "react";
import {
  WelcomeContainer,
  BgImage,
  InfoRow,
  InfoColumn1,
  CryptoHeader,
  InfoColumn2,
  InfoText,
  CoinContainer,
  CoinColumn,
  CoinSymbol,
  CoinCurrentPrice,
  AllCoinsContainer,
  HomeContainer,
  CoinsTable,
  CoinTr,
  CoinTh,
  CoinPriceTh,
  NextButton,
  PageNumber,
  ButtonContainer,
  PrevButton,
  StyledLink,
} from "./HomeElements";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import Bg from "./../../images/bg.jpg";

function CoinPreview({ coin }) {
  const [positive, setPositive] = useState(false);
  const lastH = parseFloat(coin.price_change_percentage_1h_in_currency);
  useEffect(() => {
    if (lastH > 0) {
      setPositive(true);
    }
  }, [lastH]);
  const price = parseFloat(coin.current_price);
  const symbol = coin.symbol;

  return (
    <CoinContainer>
      <CoinColumn>
        <CoinSymbol>{symbol.toUpperCase()}</CoinSymbol>
      </CoinColumn>
      <CoinColumn>
        <CoinCurrentPrice positive={positive}>
          {" "}
          {price < 1
            ? (Math.round(price * 100) / 100).toFixed(3)
            : price.toFixed(2)}{" "}
          €
        </CoinCurrentPrice>
      </CoinColumn>
    </CoinContainer>
  );
}

function CoinRow({ coin }) {
  const [positive1h, setPositive1h] = useState(false);
  const [positive24h, setPositive24h] = useState(false);
  const price_24h = parseFloat(coin.price_change_percentage_24h);
  const price_1h = parseFloat(coin.price_change_percentage_1h_in_currency);

  useEffect(() => {
    if (price_1h > 0) {
      setPositive1h(true);
    }
    if (price_24h > 0) {
      setPositive24h(true);
    }
  }, [price_24h, price_1h]);

  return (
    <CoinTr>
      <CoinTh>
        <img src={coin.image} alt={"coin"} height="20px" />
      </CoinTh>
      <CoinTh>
        <StyledLink to={`/coins/${coin.id}`}>{coin.name}</StyledLink>
      </CoinTh>
      <CoinTh>{coin.current_price} €</CoinTh>
      <CoinPriceTh positive={positive24h}>
        {(Math.round(price_24h * 100) / 100).toFixed(3)} %
      </CoinPriceTh>
      <CoinPriceTh positive={positive1h}>
        {(Math.round(price_1h * 100) / 100).toFixed(3)} %
      </CoinPriceTh>
      <CoinTh>{coin.market_cap} €</CoinTh>
    </CoinTr>
  );
}

function getThreeCoins(coins) {
  const three = [];
  for (let i = 0; i < 3; i++) {
    three.push(coins[i]);
  }
  return three;
}

function HomePage({ coins, page, setPage }) {
  const topThreeCoins = getThreeCoins(coins);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const style = { height: "30px", width: "30px" };

  return (
    <HomeContainer>
      <WelcomeContainer>
        <BgImage src={Bg} alt="backgroung" />
        <InfoRow>
          <InfoColumn1>
            <CryptoHeader>CRYPTO</CryptoHeader>
            <InfoText>Coins, prices, volume and much more </InfoText>
          </InfoColumn1>
          <InfoColumn2>
            {topThreeCoins.map((c) => {
              return <CoinPreview key={c.id} coin={c} />;
            })}
          </InfoColumn2>
        </InfoRow>
      </WelcomeContainer>
      <AllCoinsContainer>
        <CoinsTable>
          <tbody>
            <CoinTr>
              <CoinTh></CoinTh>
              <CoinTh></CoinTh>
              <CoinTh>
                <p>PRICE</p>
              </CoinTh>
              <CoinTh>
                <p>% 24h</p>
              </CoinTh>
              <CoinTh>
                <p>% 1h</p>
              </CoinTh>
              <CoinTh>
                <p>MARKET CAP</p>
              </CoinTh>
            </CoinTr>
            {coins.map((c) => {
              return <CoinRow key={c.id} coin={c} />;
            })}
          </tbody>
        </CoinsTable>
        <ButtonContainer>
          <PrevButton page={page} onClick={page > 1 ? () => prevPage() : null}>
            <GoTriangleLeft style={style} />
          </PrevButton>
          <PageNumber>{page}</PageNumber>
          <NextButton onClick={() => nextPage()}>
            <GoTriangleRight style={style} />
          </NextButton>
        </ButtonContainer>
      </AllCoinsContainer>
    </HomeContainer>
  );
}

export default HomePage;

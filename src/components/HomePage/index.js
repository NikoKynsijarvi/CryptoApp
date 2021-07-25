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
} from "./HomeElements";
import Bg from "./../../images/bg.jpg";

function CoinPreview({ coin }) {
  const [positive, setPositive] = useState(null);
  // console.log(coin);
  const lastH = parseFloat(coin.price_change_percentage_1h_in_currency);
  useEffect(() => {
    if (lastH > 0) {
      setPositive(true);
    } else {
      setPositive(false);
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
          {price < 1 ? (Math.round(price * 100) / 100).toFixed(3) : price} €
        </CoinCurrentPrice>
      </CoinColumn>
    </CoinContainer>
  );
}

function getThreeCoins(coins) {
  const three = [];
  for (let i = 0; i < 3; i++) {
    three.push(coins[i]);
  }
  return three;
}

function HomePage({ coins }) {
  const topThreeCoins = getThreeCoins(coins);

  return (
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
  );
}

export default HomePage;

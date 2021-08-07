import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CoinContainer,
  Row,
  Column,
  CoinImage,
  LinkHome,
  CoinStatsContainer,
  Stats,
  ColorH2,
  StyledH2,
  ButtonGroup,
  StyledButton,
} from "./CoinElements";
import { GoTriangleLeft } from "react-icons/go";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Loading from "./../Loading";

function CoinStats({ coin }) {
  const [positiveAth, setPositiveAth] = useState(false);
  const [positive24h, setPositive24h] = useState(false);
  const [positive1h, setPositive1h] = useState(false);

  const athDate = coin.ath_date.substring(0, 10);
  const athChange = parseFloat(coin.ath_change_percentage);
  const oneH = parseFloat(coin.price_change_percentage_1h_in_currency);
  const price_24h = parseFloat(coin.price_change_percentage_24h);

  useEffect(() => {
    if (oneH > 0) {
      setPositive1h(true);
    }
    if (price_24h > 0) {
      setPositive24h(true);
    }
    if (athChange > 0) {
      setPositiveAth(true);
    }
  }, [price_24h, oneH, athChange]);
  return (
    <CoinStatsContainer>
      <Stats>
        <StyledH2>ATH</StyledH2>
        <StyledH2>{coin.ath} €</StyledH2>
      </Stats>
      <Stats>
        <StyledH2>ATL</StyledH2>
        <StyledH2>{coin.atl} €</StyledH2>
      </Stats>
      <Stats>
        <StyledH2>PRICE</StyledH2>
        <StyledH2>{coin.current_price} €</StyledH2>
      </Stats>
      <Stats>
        <StyledH2>MARKET CAP RANK</StyledH2>
        <StyledH2>{coin.market_cap_rank}</StyledH2>
      </Stats>
      <Stats>
        <StyledH2>24H CHANGE</StyledH2>
        <ColorH2 positive={positive24h}>{price_24h} %</ColorH2>
      </Stats>
      <Stats>
        <StyledH2>1H CHANGE</StyledH2>
        <ColorH2 positive={positive1h}>
          {(Math.round(oneH * 100) / 100).toFixed(3)} %
        </ColorH2>
      </Stats>
      <Stats>
        <StyledH2>ATH CHANGE</StyledH2>
        <ColorH2 positive={positiveAth}>
          {(Math.round(athChange * 100) / 100).toFixed(3)} %
        </ColorH2>
      </Stats>
      <Stats>
        <StyledH2>ATH DATE</StyledH2>
        <StyledH2>{athDate}</StyledH2>
      </Stats>
    </CoinStatsContainer>
  );
}

function Coin({ coins }) {
  const [priceData, setPriceData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [days, setDays] = useState(1);
  const id = useParams().id;
  const coin = coins.find((c) => c.id === String(id));
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${days}&interval=6h`
      )
      .then((res) => {
        setPriceData(res.data);
        setLoading(false);
      });
  }, [id, days]);

  if (isLoading) {
    return <Loading />;
  }

  const datasetsPrices = priceData.prices.map((c) => c[1]);

  const data = {
    labels: priceData.prices.map((c) => {
      return "";
    }),
    datasets: [
      {
        label: `${coin.name} last ${days}d`,
        data: datasetsPrices,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const style = { height: "30px", width: "30px", color: "#fff" };

  return (
    <CoinContainer>
      <Row>
        <Column>
          <LinkHome to="/">
            <GoTriangleLeft style={style} />
          </LinkHome>
          <CoinImage src={coin.image} alt="coin" />
          <h1>{coin.name}</h1>
        </Column>
        <Column>
          <Line data={data} />
          <ButtonGroup>
            <StyledButton onClick={() => setDays(1)}>1 d</StyledButton>
            <StyledButton onClick={() => setDays(7)}>7 d</StyledButton>
            <StyledButton onClick={() => setDays(30)}>30 d</StyledButton>
            <StyledButton onClick={() => setDays(365)}>1 year</StyledButton>
          </ButtonGroup>
        </Column>
      </Row>
      <CoinStats coin={coin} />
    </CoinContainer>
  );
}

export default Coin;

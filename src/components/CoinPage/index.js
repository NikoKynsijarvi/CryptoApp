import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CoinContainer,
  Row,
  Column,
  CoinImage,
  LinkHome,
  CoinRow,
  InfoTable,
  CoinTr,
  CoinTh,
  ColorP,
} from "./CoinElements";
import { GoTriangleLeft } from "react-icons/go";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Loading from "./../Loading";

function CoinTable({ coin }) {
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
    <InfoTable>
      <tbody>
        <CoinTr>
          <CoinTh>
            <p>ATH: {coin.ath} €</p>
          </CoinTh>
          <CoinTh>ATL: {coin.atl}</CoinTh>
          <CoinTh>ATH DATE: {athDate}</CoinTh>
        </CoinTr>
        <CoinTr>
          <CoinTh>
            <p>PRICE {coin.current_price} €</p>
          </CoinTh>
          <CoinTh>MARKET CAP RANK {coin.market_cap_rank}</CoinTh>
          <CoinTh>MARKET CAP {coin.market_cap} €</CoinTh>
        </CoinTr>
        <CoinTr>
          <CoinTh>
            24H CHANGE:
            <ColorP positive={positive24h}> {price_24h} %</ColorP>
          </CoinTh>
          <CoinTh>
            1H CHANGE:
            <ColorP positive={positive1h}>
              {(Math.round(oneH * 100) / 100).toFixed(3)} %
            </ColorP>
          </CoinTh>
          <CoinTh>
            ATH CHANGE:
            <ColorP positive={positiveAth}>
              {(Math.round(athChange * 100) / 100).toFixed(3)} %
            </ColorP>{" "}
          </CoinTh>
        </CoinTr>
      </tbody>
    </InfoTable>
  );
}

function Coin({ coins }) {
  const [priceData, setPriceData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const id = useParams().id;
  const coin = coins.find((c) => c.id === String(id));
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=7&interval=6h`
      )
      .then((res) => {
        setPriceData(res.data);
        setLoading(false);
      });
  }, [id]);

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
        label: `${coin.name} last 7d`,
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
        </Column>
      </Row>
      <CoinRow>
        <CoinTable coin={coin} />
      </CoinRow>
    </CoinContainer>
  );
}

export default Coin;

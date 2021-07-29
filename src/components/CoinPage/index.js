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
} from "./CoinElements";
import { GoTriangleLeft } from "react-icons/go";
import axios from "axios";
import { Line } from "react-chartjs-2";

function CoinTable({ coin }) {
  return (
    <InfoTable>
      <tbody>
        <tr>
          <th>
            <p>ATH</p>
          </th>
        </tr>
        <tr>
          <th>
            <p>ATH</p>
          </th>
        </tr>
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
    return <h1>Loading...</h1>;
  }

  const datasetsPrices = priceData.prices.map((c) => c[1]);
  console.log(coin);

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

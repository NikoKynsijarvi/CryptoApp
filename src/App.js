import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=15&page=${page}&sparkline=false&price_change_percentage=1h%2C24h`
      )
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      });
  }, [page, setCoins]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <HomePage
        coins={coins}
        setCoins={setCoins}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default App;

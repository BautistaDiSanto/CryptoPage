import { useQuery } from "react-query";

export const GetCoins = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  return useQuery("coinList", async () => {
    const res = await fetch(url);
    return res.json();
  });
};

export const CoinChart = (coinId) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`;
  return useQuery(["coinChart", coinId], async () => {
    const res = await fetch(url);
    return res.json();
  });
};

export const GetCoinDetail = (coinId) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId.coinId}/`;
  return useQuery(["coinDetail", coinId], async () => {
    const res = await fetch(url);
    return res.json();
  });
};

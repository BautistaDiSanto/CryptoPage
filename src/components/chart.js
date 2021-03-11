import styled from "styled-components";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { CoinChart } from "../API";
import { Line } from "@ant-design/charts";
import { useParams } from "react-router";

export const Chart = () => {
  const { coinId } = useParams();
  const { data, status } = CoinChart(coinId);
  console.log("chart", data);
  if (status === "loading")
    return (
      <Container>
        <ClipLoader color="white" size="150px" />
      </Container>
    );
  if (data) {
    const prices = data.prices.map((price) => ({
      date: new Date(price[0]).toLocaleString(),
      value: price[1],
    }));
    const config = {
      data: prices,
      width: 600,
      height: 500,
      autoFit: false,
      xField: "date",
      yField: "value",
      point: {
        size: 0,
      },
      slider: {
        start: 0.1,
        end: 0.5,
      },
    };

    return (
      <Container>
        <Line {...config} />
      </Container>
    );
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: 35rem;
`;

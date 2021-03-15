import { Header } from "../components/header";
import styled from "styled-components";
import { useParams } from "react-router";
import { Chart } from "../components/chart";

export const Detail = () => {
  const { coinId } = useParams();
  console.log("Detail", coinId);
  return (
    <Container>
      <Header coinId={coinId} />
      <Chart coinId={coinId} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
`;

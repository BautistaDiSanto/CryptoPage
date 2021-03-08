import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import { GetCoins } from "../API/index";
import ClipLoader from "react-spinners/ClipLoader";

export const Currencies = (setId) => {
  const { data, status } = GetCoins();
  const history = useHistory();
  console.log("CoinList", data);
  if (status === "loading")
    return (
      <Container>
        <ClipLoader color="white" size="150px" />
      </Container>
    );

  return (
    <Container>
      <Description>
        <Rank>
          <p>rank</p>
        </Rank>
        <Name>
          <p style={{ marginLeft: "1.5rem" }}>name</p>
        </Name>
        <Price>
          <p>price</p>
        </Price>
        <Change24 style={{ fontWeight: "unset" }}>24hs</Change24>
        <MarketCap>market cap</MarketCap>
        <Volume>volume</Volume>
        <TotalSupply>circulating supply</TotalSupply>
      </Description>
      <Ul>
        {data &&
          data.length &&
          data.map((v, index) => (
            <Li key={v.id}>
              <Rank style={{ color: "gray" }}>#{index + 1}</Rank>
              <Name
                onClick={() => {
                  history.push(`/currencies/${v.id}`);
                }}
              >
                <Icon src={v.image} />
                <CoinName>{v.name}</CoinName>
                <CoinSymbol>{v.symbol}</CoinSymbol>
              </Name>
              <Price>${v.current_price.toLocaleString()}</Price>
              <Change24>
                {v.price_change_percentage_24h < 0 ? (
                  <p style={{ color: "red" }}>
                    {v.price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : (
                  <p style={{ color: "green" }}>
                    +{v.price_change_percentage_24h.toFixed(2)}%
                  </p>
                )}
              </Change24>
              <MarketCap>${v.market_cap.toLocaleString()}</MarketCap>
              <Volume>${v.total_volume.toLocaleString()}</Volume>
              <TotalSupply>
                {v.circulating_supply}
                &nbsp;
                {v.symbol}
              </TotalSupply>
            </Li>
          ))}
      </Ul>
    </Container>
  );
};

const flexStart = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const flexEnd = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1a202c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  background-color: #011627;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  background-color: #011627;
  height: 3.5rem;
  margin-bottom: 0.2rem;
  :hover {
    cursor: pointer;
    background-color: #272d38;
  }
`;

const Ul = styled.ul`
  width: 100%;
`;

const Rank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 5%;
`;

const Name = styled.div`
  height: 100%;
  width: 20%;
  ${flexStart};
`;
const Price = styled.div`
  height: 100%;
  width: 10%;
  ${flexEnd}
`;

const Change24 = styled.div`
  height: 100%;
  width: 10%;
  ${flexEnd}
`;

const MarketCap = styled.div`
  height: 100%;
  width: 15%;
  ${flexEnd}
`;

const Volume = styled.div`
  height: 100%;
  width: 15%;
  ${flexEnd}
`;

const TotalSupply = styled.div`
  height: 100%;
  width: 20%;
  ${flexEnd}
`;

const Icon = styled.img`
  height: 2rem;
  width: 2rem;
  margin-left: 1rem;
`;

const CoinName = styled.p`
  width: 15rem;
  margin-left: 1rem;
`;

const CoinSymbol = styled.div`
  ${flexStart}
  color: grey;
  width: 5rem;
  height: 100%;
  margin-left: 1rem;
`;

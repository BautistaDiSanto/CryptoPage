import styled from "styled-components";
import { GetCoinDetail } from "../API";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";

export const Header = (coinId) => {
  const { data, status } = GetCoinDetail(coinId);
  console.log("header", data);
  if (status === "loading")
    return (
      <Container>
        <ClipLoader color="white" />
      </Container>
    );
  return (
    <Container>
      <Top>
        <FirstHalf>
          <Path>
            cryptocurrencies {">"} {data.name}
          </Path>
        </FirstHalf>
        <SecondHalf>
          <TopPrice>
            {data.name} price ({data.symbol})
          </TopPrice>
        </SecondHalf>
      </Top>
      <Middle>
        <FirstHalf>
          <Icon src={data.image.large} />
          <Name>{data.name}</Name>
          <Symbol>({data.symbol})</Symbol>
        </FirstHalf>
        <SecondHalf>
          <Price>${data.market_data.current_price.usd.toLocaleString()}</Price>
          {data.market_data.price_change_24h < 0 ? (
            <Change24 style={{ backgroundColor: "red" }}>
              <AiFillCaretDown />
              {data.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                2
              )}
              %
            </Change24>
          ) : (
            <Change24 style={{ backgroundColor: "green" }}>
              <AiFillCaretUp />
              {data.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                2
              )}
              %
            </Change24>
          )}
        </SecondHalf>
      </Middle>
      <Bottom>
        <FirstHalf>
          <Random style={{ marginLeft: "0.5rem" }}>
            <p>rank #{data.market_data.market_cap_rank}</p>
          </Random>
          <Random>
            <FaExternalLinkAlt />
            <Link href={data.links.homepage[0]} target="parent">
              {data.links.homepage[0].replace(/https?\:\/\/|www.|\//g, "")}
            </Link>
          </Random>
        </FirstHalf>
        <SecondHalf>
          <Change24>
            {data.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
              4
            )}
            %
          </Change24>
          <Button>
            change <BiChevronDown />
          </Button>
        </SecondHalf>
      </Bottom>
    </Container>
  );
};

const Button = styled.button`
  background-color: #2d3748;
  border: none;
  border-radius: 0.2rem;
  outline: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 1.5rem;
  margin-right: 1rem;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  color: white;
  width: 100%;
  height: 7rem;
  background-color: #011627;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Path = styled.p`
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: grey;
`;

const TopPrice = styled.p`
  margin-right: 1rem;
  font-size: 0.8rem;
  color: grey;
`;

const Middle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FirstHalf = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
`;

const SecondHalf = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 50%;
`;

const Name = styled.div`
  font-weight: bolder;
  font-size: 1.5rem;
  margin-left: 0.8rem;
`;

const Symbol = styled.div`
  font-weight: bolder;
  font-size: 1.5rem;
  margin-left: 0.8rem;
  color: grey;
`;

const Price = styled.div`
  font-weight: bolder;
  font-size: 2rem;
`;

const Change24 = styled.div`
  width: fit-content;
  border-radius: 0.3rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 1rem 0rem 1rem;
`;

const Icon = styled.img`
  margin-left: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
`;

const Bottom = styled.div`
  height: 45%;
  display: flex;
  align-items: center;
`;

const Random = styled.p`
  background-color: #2d3748;
  color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  margin: 0.1rem;
  width: fit-content;
  border-radius: 0.2rem;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  margin-left: 0.3rem;
`;

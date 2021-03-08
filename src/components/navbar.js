import styled from "styled-components";
import { GiTwoCoins } from "react-icons/gi";

export const Navbar = () => {
  return (
    <Container>
      <Logo />
      <p>HOME</p> <p>ABOUT</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #204044;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled(GiTwoCoins)`
  color: #a0aec0;
  height: 2.5rem;
  width: 2.5rem;
`;

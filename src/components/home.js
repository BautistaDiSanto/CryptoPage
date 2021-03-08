import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const Home = () => {
  let history = useHistory();

  return (
    <Container>
      <Div>
        <Button
          onClick={() => {
            history.push("/currencies");
          }}
        >
          currencies
        </Button>
      </Div>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  background-color: grey;
  height: 80%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: red;
  height: 2rem;
  width: 5rem;
  outline: none;
  border: 1px solid red;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  :active {
    transition: 0.2s;
    transform: scale(1.2);
  }
`;

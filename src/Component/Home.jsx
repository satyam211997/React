import { useContext } from "react";
import Header from "./Header";
import { themeContext } from "../Context/Them";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => (props.theme !== "dark" ? "white" : "black")};
`;

const Text = styled.div`
  height: 100vh;
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
`;

const Home = () => {
  const theme = useContext(themeContext);

  return (
    <Container theme={theme}>
      <Header />
      <Text theme={theme}>This is my Home : {theme}</Text>
    </Container>
  );
};

export default Home;

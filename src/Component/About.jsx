import { useContext, useMemo } from "react";
import { ThemeProvider, themeContext } from "../Context/Them";
import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;

  background-color: ${(props) => (props.theme !== "dark" ? "white" : "black")};
`;

const Text = styled.div`
  height: 100vh;
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
`;

const About = () => {
  const theme = useContext(themeContext);

  return (
    <Container theme={theme}>
      <Header />
      <Text theme={theme}>This is my About : {theme}</Text>
    </Container>
  );
};

export default About;

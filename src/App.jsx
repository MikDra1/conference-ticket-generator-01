import styled from "styled-components";
import Form from "./components/Form";
import Title from "./components/Title";
import patternLines from "/images/pattern-lines.svg";
import { useForm } from "./contexts/FormProvider";
import TicketScreen from "./components/TicketScreen";
import { useConf } from "./contexts/ConfProvider";

const Container = styled.div`
  min-height: 100vh;
  background-image: url("./images/background-mobile.png");
  background-position: 0 0, 0 0;
  background-size: 100% 100%;

  overflow-x: hidden;
  position: relative;

  @media (min-width: 600px) {
    background-image: url("./images/background-tablet.png");
  }

  @media (min-width: 1000px) {
    background-image: url("./images/background-desktop.png");
  }
`;

const ImageCircleTop = styled.img`
  position: absolute;
  top: -5rem;
  left: -4rem;
  scale: 0.8;

  @media (min-width: 1000px) {
    scale: 1;
    left: 4rem;
  }
`;

const ImageLineTop = styled.img`
  position: absolute;
  top: -0.5rem;
  right: -7rem;
  scale: 0.4;

  @media (min-width: 1000px) {
    scale: 1;
    right: 0;
    top: 5rem;
  }
`;

const ImageLineBottom = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

const PatternLines = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  object-fit: cover;
  width: 100vw;
  z-index: 1;
  filter: brightness(0) invert(1);
`;

const Content = styled.div`
  position: relative;
  z-index: 10000;
`;

function App() {
  const { showTicket } = useForm();
  const { isMobile } = useConf();

  return (
    <Container>
      <ImageCircleTop src="./images/pattern-circle.svg" alt="" />
      <ImageLineTop src="./images/pattern-squiggly-line-top.svg" alt="" />
      {isMobile ? (
        <ImageLineBottom
          src="./images/pattern-squiggly-line-bottom-mobile-tablet.svg"
          alt=""
        />
      ) : (
        <ImageLineBottom
          src="./images/pattern-squiggly-line-bottom-desktop.svg"
          alt=""
        />
      )}
      <PatternLines src={patternLines} alt="Pattern Lines" />

      <Content>
        {showTicket ? (
          <TicketScreen />
        ) : (
          <>
            <Title />
            <Form />
          </>
        )}
      </Content>
    </Container>
  );
}

export default App;

import styled from "styled-components";
import { useConf } from "../contexts/ConfProvider";

const H1 = styled.h1`
  color: #fff;
  margin-top: 2.5rem;
  line-height: 1.1;
  font-size: 1.75rem;

  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: var(--neutral-300);
  margin-top: 1rem;
  max-width: 35ch;

  @media (min-width: 1000px) {
    max-width: none;
    font-size: 1.2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 4rem;
`;

const Logo = styled.img`
  scale: 0.9;
`;

function Title() {
  const { isMobile } = useConf();

  return (
    <TitleContainer>
      <div>
        <Logo src="./images/logo-full.svg" alt="" />
      </div>
      {isMobile ? (
        <H1>Your Journey to Coding Conf 2025 Starts Here!</H1>
      ) : (
        <H1>
          Your Journey to Coding Conf <br></br> 2025 Starts Here!
        </H1>
      )}
      <Description>
        Secure your spot at next year&apos;s biggest coding conference.
      </Description>
    </TitleContainer>
  );
}

export default Title;

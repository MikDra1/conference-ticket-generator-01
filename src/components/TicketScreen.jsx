import styled from "styled-components";
import { useForm } from "../contexts/FormProvider";
import Ticket from "./Ticket";
import { useConf } from "../contexts/ConfProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 3.5rem;
`;

const Logo = styled.img`
  scale: 0.7;

  @media (min-width: 600px) {
    scale: 1;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.75rem;
  line-height: 1.1;
  text-align: center;
  margin-top: 2.5rem;
  width: 80%;
  margin-inline: auto;

  & span {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (min-width: 600px) {
    font-size: 3.25rem;
    max-width: 30ch;
  }
`;

const GradientText = styled.span`
  background: var(--gradient-text);
  -webkit-background-clip: text;
  color: transparent;
  display: inline; /* Ensures gradient applies to the text as a whole */
  white-space: pre-wrap; /* Allows line breaks while preserving spaces */
  word-break: break-word; /* Ensures long words break correctly */
  & span {
    display: inline-block; /* Ensures each word gets its own gradient when broken */
    background: inherit; /* Inherit the gradient from the parent */
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const Description = styled.p`
  color: var(--neutral-300);
  text-align: center;
  margin-top: 1rem;
  width: 80%;
  margin-inline: auto;

  & span {
    color: var(--orange-700);
  }

  @media (min-width: 600px) {
    margin-top: 2rem;
    font-size: 1.05rem;
  }
`;

function TicketScreen() {
  const { fullName, emailAddress } = useForm();
  const { isMobile } = useConf();

  return (
    <Container>
      <Logo src="./images/logo-full.svg" alt="logo" />
      <Title>
        Congrats,{" "}
        <GradientText>
          <span>{fullName === "" ? "Jonatan Kristof" : fullName}</span>
        </GradientText>
        ! Your ticket is ready.
      </Title>
      {isMobile ? (
        <Description>
          We&apos;ve emailed your ticket to{" "}
          <span>
            {emailAddress === "" ? "jonatan@email.com" : emailAddress}
          </span>{" "}
          and will send updates in the run up to the event.
        </Description>
      ) : (
        <Description>
          We&apos;ve emailed your ticket to<br></br>
          <span>
            {emailAddress === "" ? "jonatan@email.com" : emailAddress}
          </span>{" "}
          and will send updates in<br></br> the run up to the event.
        </Description>
      )}

      <Ticket />
    </Container>
  );
}

export default TicketScreen;

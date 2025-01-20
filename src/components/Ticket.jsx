import styled from "styled-components";
import { useForm } from "../contexts/FormProvider";
import { ensureStartsWith } from "../helpers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 90%;
  margin-top: 4rem;
  background-image: url("./images/pattern-ticket.svg");
  background-size: contain;
  background-repeat: no-repeat;
  padding: 2rem 2rem 2rem 2rem;
  color: var(--neutral-300);
  position: relative;
  height: 11rem;

  @media (min-width: 360px) {
    height: 12.5rem;
  }

  @media (min-width: 400px) {
    width: 22.5rem;
  }

  @media (min-width: 600px) {
    scale: 1.2;
    margin-top: 6rem;
  }

  @media (min-width: 1000px) {
    scale: 1.4;
    margin-top: 8rem;
  }
`;

const FlexTop = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  margin-top: -0.75rem;
  margin-left: -1rem;
`;

const SmallFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FlexBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: -1rem;
  padding-bottom: 1rem;
`;

const AvatarImage = styled.img`
  width: 2.5rem;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
`;

const SmallLogo = styled.img`
  width: 2rem;
`;

const ConfDescription = styled.div`
  margin-top: -0.5rem;
  & h3 {
    font-size: 1.5rem;
  }

  & p {
    font-size: 0.838rem;
  }
`;

const GitHubIcon = styled.img`
  width: 1.2rem;
`;

const TicketId = styled.p`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(-2%);
  rotate: 90deg;
  font-size: 1.25rem;
  color: var(--neutral-500);
`;

function Ticket() {
  const { fullName, gitHubUsername, image } = useForm();

  return (
    <Container>
      <FlexTop>
        <SmallLogo src="./images/logo-mark.svg" alt="ticket" />
        <ConfDescription>
          <h3>Coding Conf</h3>
          <p>Jan 31, 2025 / Austin, TX</p>
        </ConfDescription>
      </FlexTop>
      <FlexBottom>
        <AvatarImage
          src={image ? image : "./images/image-avatar.jpg"}
          alt="avatar"
        />
        <div>
          <h4>{fullName}</h4>
          <SmallFlex>
            <GitHubIcon src="./images/icon-github.svg" alt="github icon" />
            <p>{ensureStartsWith(gitHubUsername, "@")}</p>
          </SmallFlex>
        </div>
      </FlexBottom>
      <TicketId>#01609</TicketId>
    </Container>
  );
}

export default Ticket;

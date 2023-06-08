import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  label: string;
  showIcon?: boolean;
}

const TopBarContainer = styled.header`
  background: var(--background-ravn-black);
`;

const TopBarLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  position: relative;
  height: 52px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 0px 32px;
`;

const Heading = styled.h2`
  width: 100%;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 0.0125em;
  color: #ffffff;
  text-align: center;

  @media screen and (min-width: 640px) {
    text-align: start;
  }
`;

const Icon = styled.img`
  position: absolute;
`;

export const TopBar = ({ label, showIcon = false }: Props) => {
  return (
    <TopBarContainer>
      <TopBarLink to="/">
        <Container>
          {showIcon && <Icon src="/arrow_left.svg" alt="Arrow left" />}
          <Heading>{label}</Heading>
        </Container>
      </TopBarLink>
    </TopBarContainer>
  );
};

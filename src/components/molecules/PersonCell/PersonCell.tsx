import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

interface PersonCellProps {
  name: string;
  description: string;
  id: string;
}

const PersonCellLink = styled(Link)`
  text-decoration: none;
`;

const PersonCellContainer = styled.div<{ isActive: boolean }>`
  width: 100%;
  min-width: 375px;
  height: 69px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: relative;

  /* props */
  ${(props) =>
    props.isActive &&
    css`
      background: #f6f6f6;
    `}

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100% - 16px);
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Content = styled.div`
  width: 100%;
`;

const Heading = styled.h2`
  font-size: var(--text-size-h2);
  font-weight: 700;
  letter-spacing: 0.0125em;
  color: var(--color-text-dark);
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: var(--text-size-p);
  font-weight: 400;
  letter-spacing: 0.0125em;
  color: var(--color-text-light);
  margin: 0;
`;

const Arrow = styled.img`
  width: 24px;
  height: 24px;
`;

export const PersonCell = ({ name, description, id }: PersonCellProps) => {
  const location = useLocation();
  const isActive = location.pathname.includes(id);

  return (
    <PersonCellLink to={`people/${id}`}>
      <PersonCellContainer isActive={isActive}>
        <Content>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </Content>
        <Arrow src="/arrow_right.svg" alt="Arrow" />
      </PersonCellContainer>
    </PersonCellLink>
  );
};

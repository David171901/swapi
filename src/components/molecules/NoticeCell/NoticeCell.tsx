import styled from "styled-components";

interface Props {
  label: string;
}

const NoticeCellContainer = styled.div`
  width: 375px;
  height: 56px;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: var(--text-size-h2);
  font-weight: 700;
  letter-spacing: 0.0125em;
  color: var(--color-text-emphasis);
  align-self: center;
  margin: 0;
`;

export const NoticeCell = ({ label }: Props) => {
  return (
    <NoticeCellContainer>
      <Heading>{label}</Heading>
    </NoticeCellContainer>
  );
};

import styled from "styled-components";

interface Props {
  label: string;
}

const SectionHeaderContainer = styled.div`
  width: 375px;
  height: 56px;
  padding: 32px 16px 8px 16px;
  display: flex;
`;

const Heading = styled.h2`
  font-size: var(--text-size-h2);
  font-weight: 700;
  letter-spacing: 0.0125em;
  color: var(--color-text-dark);
  align-self: center;
  margin: 0;
`;

export const SectionHeader = ({ label }: Props) => {
  return (
    <SectionHeaderContainer>
      <Heading>{label}</Heading>
    </SectionHeaderContainer>
  );
};

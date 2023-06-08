import styled, { keyframes } from "styled-components";

interface Props {
  label: string;
}

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Heading = styled.h1`
  font-size: var(--text-size-h2);
  font-weight: 700;
  letter-spacing: 0.0125em;
  color: var(--color-text-light);
  display: inline;
  margin: 0;
`;

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.img`
  width: 24px;
  height: 24px;
  display: inline-block;
  animation: ${spinnerAnimation} 2.5s infinite linear;
`;

export const LoadingIndicator = ({ label }: Props) => {
  return (
    <LoadingContainer>
      <Spinner src="/spinner.svg" alt="Spinner" />
      <Heading>{label}</Heading>
    </LoadingContainer>
  );
};

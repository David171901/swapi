import styled from "styled-components";

interface DataCellProps {
  leftText: string;
  rightText: string;
}

const DataCellContainer = styled.div`
  width: 100%;
  height: 56px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  position: relative;

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

const LeftText = styled.p`
  font-size: var(--text-size-h2);
  font-weight: 700;
  letter-spacing: 0.0125em;
  color: var(--color-text-light);
  display: inline;
  align-self: center;
  margin: 0;
  width: 100%;
`;

const RightText = styled.p`
  font-size: var(--text-size-h2);
  font-weight: 700;
  letter-spacing: 0.0125em;
  color: var(--color-text-dark);
  display: inline;
  text-align: end;
  align-self: center;
  margin: 0;
  width: 100%;
`;

export const DataCell = ({ leftText, rightText }: DataCellProps) => {
  return (
    <DataCellContainer>
      <LeftText>{leftText}</LeftText>
      <RightText>{rightText}</RightText>
    </DataCellContainer>
  );
};

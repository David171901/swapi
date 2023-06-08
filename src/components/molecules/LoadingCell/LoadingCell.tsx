import styled from 'styled-components';
import { LoadingIndicator } from '../../atoms';

interface Props {
  label: string;
}

const LoadingCellContainer = styled.div`
  width: 100%;
  min-width: 375px;
  height: 56px;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

export const LoadingCell = ({ label }: Props) => {
  return (
    <LoadingCellContainer>
      <LoadingIndicator label={label} />
    </LoadingCellContainer>
  );
};
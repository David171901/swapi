
import { LoadingIndicator } from '../../atoms';
import styles from './LoadingCell.module.css';

interface Props {
  label: string;
}

export const LoadingCell = ({ label }: Props) => {
  return (
    <div className={styles.loadingCell}>
      <LoadingIndicator label={label} />
    </div>
  );
};
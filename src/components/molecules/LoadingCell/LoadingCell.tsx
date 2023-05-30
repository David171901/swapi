import LoadingIndicator from '../../atoms/LoadingIndicator/LoadingIndicator';
import styles from './LoadingCell.module.css';

interface Props {
  label: string;
}

const LoadingCell = ({ label }: Props) => {
  return (
    <div className={styles.loadingCell}>
      <LoadingIndicator label={label} />
    </div>
  );
};

export default LoadingCell;

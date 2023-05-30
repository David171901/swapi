import styles from "./LoadingIndicator.module.css";

interface Props {
  label: string;
}

const LoadingIndicator = ({ label }: Props) => {
  return (
    <div className={styles.loadingIndicator}>
      <img src="/spinner.svg" alt="Spinner" className={styles.spinner} />
      <h2 className={styles.heading}>{label}</h2>
    </div>
  );
};

export default LoadingIndicator;

import styles from './SectionHeader.module.css';

interface Props {
  label: string;
}

export const SectionHeader = ({ label }: Props) => {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.heading}>{label}</h2>
    </div>
  );
};


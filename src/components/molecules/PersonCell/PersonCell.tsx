import styles from './PersonCell.module.css';

interface PersonCellProps {
  name: string;
  description: string;
}

const PersonCell = ({ name, description }: PersonCellProps) => {
  return (
    <div className={styles.personCell}>
      <div className={styles.content}>
        <h2 className={styles.heading}>{name}</h2>
        <p className={styles.paragraph}>{description}</p>
      </div>
      <img src="/arrow_right.svg" alt="Arrow" className={styles.arrow} />
    </div>
  );
};

export default PersonCell;

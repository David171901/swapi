import { Link } from "react-router-dom";
import styles from "./PersonCell.module.css";

interface PersonCellProps {
  name: string;
  description: string;
  id: string;
}

const PersonCell = ({ name, description, id }: PersonCellProps) => {
  return (
    <Link to={`people/${id}`}>
      <div className={styles.personCell}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{name}</h2>
          <p className={styles.paragraph}>{description}</p>
        </div>
        <img src="/arrow_right.svg" alt="Arrow" className={styles.arrow} />
      </div>
    </Link>
  );
};

export default PersonCell;

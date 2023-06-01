import { Link, useLocation } from "react-router-dom";
import styles from "./PersonCell.module.css";

interface PersonCellProps {
  name: string;
  description: string;
  id: string;
}

export const PersonCell = ({ name, description, id }: PersonCellProps) => {

  const pathname = useLocation().pathname;

  return (
    <Link to={`people/${id}`}>
      <div className={`${styles.personCell} ${pathname.includes(id) ? `${styles.active}` : ''}`}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{name}</h2>
          <p className={styles.paragraph}>{description}</p>
        </div>
        <img src="/arrow_right.svg" alt="Arrow" className={styles.arrow} />
      </div>
    </Link>
  );
};

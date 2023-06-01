import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";

interface Props {
  label: string;
  showIcon?: boolean;
}

export const TopBar = ({ label, showIcon = false }: Props) => {
  return (
    <header className={styles.topbar}>
      <Link to="/" className={styles.link}>
        <div className={styles.container}>
          {showIcon && <img src="/arrow_left.svg" className={styles.icon} />}
          <h2 className={styles.heading}>{label}</h2>
        </div>
      </Link>
    </header>
  );
};

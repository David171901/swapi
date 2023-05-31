import { Link } from "react-router-dom";
import styles from "./Header.module.css";

interface Props {
  label: string;
  showIcon?: boolean;
}

export  const Header = ({ label, showIcon = false }: Props) => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <nav className={styles.container}>
          {showIcon && <img src="/arrow_left.svg" className={styles.icon} />}
          <h2 className={styles.heading}>{label}</h2>
        </nav>
      </Link>
    </header>
  );
};

import { Link } from "react-router-dom";
import styles from "./Header.module.css";

interface Props {
  label: string;
}

const Header = ({label}: Props) => {
  return (
    <Link to='/'>
      <header className={styles.container}>
        <h2 className={styles.h2}>{label}</h2>
      </header>
    </Link>
  );
};

export default Header;

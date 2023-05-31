import styles from "./Header.module.css";

interface Props {
  label: string;
}

const Header = ({label}: Props) => {
  return (
    <header className={styles.container}>
      <h2 className={styles.h2}>{label}</h2>
    </header>
  );
};

export default Header;

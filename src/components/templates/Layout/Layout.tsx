import { Outlet } from "react-router-dom";
import Header from "../../molecules/Header/Header";
import PeopleColumn from "../../organisms/PeopleColumn/PeopleColumn";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
    <Header label="People of Star Wars"></Header>
      <div className={styles.container}>
        <div className={styles.columnPeople}>
          <PeopleColumn></PeopleColumn>
        </div>
        <div className={styles.columnResults}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

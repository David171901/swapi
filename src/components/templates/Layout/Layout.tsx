import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import { Header } from "../../molecules";
import { PeopleColumn } from "../../organisms";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header label="People of Star Wars"></Header>
      <div className={styles.container}>
        <div className={styles.columnPeople}>
          <PeopleColumn></PeopleColumn>
        </div>
        <div
          className={`${styles.columnResults} ${
            pathname.includes("people") ? `${styles.active}` : ""
          }`}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

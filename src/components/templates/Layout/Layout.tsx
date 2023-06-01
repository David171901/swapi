import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import { PeopleColumn } from "../../organisms";
import { TopBar } from "../../molecules";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <TopBar label="People of Star Wars"></TopBar>
      <main className={styles.container}>
        <section className={styles.columnPeople}>
          <PeopleColumn></PeopleColumn>
        </section>
        <section
          className={`${styles.columnResults} ${
            pathname.includes("people") ? `${styles.active}` : ""
          }`}
        >
          <Outlet></Outlet>
        </section>
      </main>
    </>
  );
};

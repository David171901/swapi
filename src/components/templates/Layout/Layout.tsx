import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import { Header } from "../../molecules";
import { PeopleColumn } from "../../organisms";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header label="People of Star Wars"></Header>
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

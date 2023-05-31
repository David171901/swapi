import { Outlet } from "react-router-dom";
import Header from "./molecules/Header/Header";
import PeopleColumn from "./organisms/PeopleColumn/PeopleColumn";

export const Layout = () => {
  return (
    <>
    <Header label="People of Star Wars"></Header>
      <div className="container">
        <div className="column column-people">
          <PeopleColumn></PeopleColumn>
        </div>
        <div className="column column-results">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

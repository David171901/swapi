import { Outlet } from "react-router-dom";
import useSwapi from "../hooks/useSwapi";
import Header from "./molecules/Header/Header";
// import LoadingIndicator from "./atoms/LoadingIndicator/LoadingIndicator";
import LoadingCell from "./molecules/LoadingCell/LoadingCell";
// import NoticeCell from "./molecules/NoticeCell/NoticeCell";
// import SectionHeader from "./molecules/SectionHeader/SectionHeader";
// import DataCell from "./molecules/DataCell/DataCell";
// import PersonCell from "./molecules/PersonCell/PersonCell";

export const Layout = () => {

    const { allPeople } = useSwapi();
    // console.log("🚀 ~ file: Layout.tsx:7 ~ Layout ~ allPeople:", allPeople)

  return (
    <>
      {/* <div>Swapi</div>
      <LoadingIndicator label="Loading"></LoadingIndicator>
      <br />
      <SectionHeader label="General Information"></SectionHeader>
      <br />
      <LoadingCell label="Loading"></LoadingCell>
      <br />
      <NoticeCell label="Failed to Load Data"></NoticeCell>
      <br />
      <DataCell leftText="Eye Color" rightText="Blue"></DataCell>
      <br />
      <PersonCell description="Human from Tatooine" name="Luke Skywalker"></PersonCell> */}
      <Header></Header>
      <LoadingCell label="Loading"></LoadingCell>
      <Outlet></Outlet>
    </>
  );
};

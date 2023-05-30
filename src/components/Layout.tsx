import { Outlet } from "react-router-dom";
import useSwapi from "../hooks/useSwapi";
import LoadingIndicator from "./atoms/LoadingIndicator/LoadingIndicator";
import LoadingCell from "./molecules/LoadingCell/LoadingCell";
import NoticeCell from "./molecules/NoticeCell/NoticeCell";
import SectionHeader from "./molecules/SectionHeader/SectionHeader";
import DataCell from "./molecules/DataCell/DataCell";
import PersonCell from "./molecules/PersonCell/PersonCell";

export const Layout = () => {

    const { allPeople } = useSwapi();
    // console.log("🚀 ~ file: Layout.tsx:7 ~ Layout ~ allPeople:", allPeople)

  return (
    <>
      <div>Swapi</div>
      <LoadingIndicator></LoadingIndicator>
      <br />
      <LoadingCell></LoadingCell>
      <br />
      <NoticeCell></NoticeCell>
      <br />
      <SectionHeader></SectionHeader>
      <br />
      <DataCell></DataCell>
      <br />
      <PersonCell></PersonCell>
      <Outlet></Outlet>
    </>
  );
};

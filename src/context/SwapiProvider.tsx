import { createContext, useState, useEffect } from "react";
import { Person } from "../interfaces";
import { useSwapiPeople } from "../hooks/useSwapiPeople";

export type SwapiContextProps = {
  allPeople: Person[];
  //   getPeopleByID: (id: string) => Promise<Person>;
    loading: boolean;
    error: any;
  //   offset: number;
  //   setOffset: (value: number) => void;
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SwapiContext = createContext<SwapiContextProps>({} as SwapiContextProps);

const SwapiProvider = ({ children }: Props) => {

  const { allPeople, loading, offset, setOffset, error } = useSwapiPeople();

  return (
    <SwapiContext.Provider
      value={{
        allPeople,
        loading,
        error,
      }}
    >
      {children}
    </SwapiContext.Provider>
  );
};

export { SwapiProvider };
export default SwapiContext;

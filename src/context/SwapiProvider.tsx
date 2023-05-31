import { createContext } from "react";
import { Person } from "../interfaces";
import { useSwapiPeople } from "../hooks/useSwapiPeople";

export type SwapiContextProps = {
  allPeople: Person[];
  loading: boolean;
  error: any;
  page: number;
  setPage: (value: number) => void;
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SwapiContext = createContext<SwapiContextProps>({} as SwapiContextProps);

const SwapiProvider = ({ children }: Props) => {
  const { allPeople, loading, page, setPage, error } = useSwapiPeople();

  return (
    <SwapiContext.Provider
      value={{
        allPeople,
        loading,
        error,
        page,
        setPage
      }}
    >
      {children}
    </SwapiContext.Provider>
  );
};

export { SwapiProvider };
export default SwapiContext;

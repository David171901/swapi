import { createContext } from "react";
import { Person } from "../interfaces";
import { useSwapiPeople } from "../hooks/useSwapiPeople";
import { useWindowSize } from "../hooks/useWindowSize ";

export type SwapiContextProps = {
  allPeople: Person[];
  loading: boolean;
  error: any;
  page: number;
  setPage: (value: number) => void;
  screenSize: { width: number; height: number };
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SwapiContext = createContext<SwapiContextProps>({} as SwapiContextProps);

const SwapiProvider = ({ children }: Props) => {
  const { allPeople, loading, page, setPage, error } = useSwapiPeople();
  const screenSize = useWindowSize();

  return (
    <SwapiContext.Provider
      value={{
        allPeople,
        loading,
        error,
        page,
        setPage,
        screenSize,
      }}
    >
      {children}
    </SwapiContext.Provider>
  );
};

export { SwapiProvider };
export default SwapiContext;

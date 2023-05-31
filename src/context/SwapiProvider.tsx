import { createContext } from "react";
import { Person } from "../interfaces";
import { useSwapiPeople } from "../hooks/useSwapiPeople";

export type SwapiContextProps = {
  allPeople: Person[];
  getPeopleByID: (id: string) => Promise<Person>;
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

  const getPeopleByID = async (id: string): Promise<Person> => {
    const baseURL = "https://swapi.dev/api/";
    const res = await fetch(`${baseURL}people/${id}`);
    const data = await res.json();
    const vehiclesData = await Promise.all(
      data.vehicles.map(async (vehicleURL: string) => {
        const vehicleRes = await fetch(vehicleURL);
        const vehicleData = await vehicleRes.json();
        return vehicleData;
      })
    );
    data.vehiclesInfo = vehiclesData;
    return data;
  };

  return (
    <SwapiContext.Provider
      value={{
        allPeople,
        getPeopleByID,
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

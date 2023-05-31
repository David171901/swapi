import { createContext, useState, useEffect } from "react";
import { Person } from "../interfaces";
import { useSwapiPeople } from "../hooks/useSwapiPeople";

export type SwapiContextProps = {
  allPeople: Person[];
  getPeopleByID: (id: string) => Promise<Person>;
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

  const getPeopleByID = async (id: string): Promise<Person> => {
    const baseURL = "https://swapi.dev/api/";
    const res = await fetch(`${baseURL}people/${id}`);
    const data = await res.json();

    // Obtener los datos de los vehículos
    const vehiclesData = await Promise.all(
      data.vehicles.map(async (vehicleURL: string) => {
        const vehicleRes = await fetch(vehicleURL);
        const vehicleData = await vehicleRes.json();
        return vehicleData;
      })
    );

    // Reemplazar la clave "vehicles" con los datos obtenidos
    data.vehicles = vehiclesData;

    // Realizar otras peticiones para obtener información adicional
    // ...

    return data;
  };

  return (
    <SwapiContext.Provider
      value={{
        allPeople,
        getPeopleByID,
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

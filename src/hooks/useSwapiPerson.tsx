import { useEffect, useState } from "react";
import { Person } from "../interfaces";

export const useSwapiPerson = (
  id: string
): { person: Person | null; loading: boolean; error: any } => {
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getPerson = async () => {
    try {
      setLoading(true);
      const responsePerson = await fetchPerson(id)
      setPerson(responsePerson);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPerson();
  }, [id]);

  return { person, loading, error };
};


const fetchPerson = async (id: string): Promise<Person> => {
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

  return data
}
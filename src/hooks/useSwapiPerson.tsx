import { useEffect, useState } from "react";
import { Person } from "../interfaces";

export const useSwapiPerson = (
  id: string
): { person: Person | null; loading: boolean; error: any } => {
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        setLoading(true);
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
        setPerson(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPerson();
  }, [id]);

  return { person, loading, error };
};

import { useState, useEffect } from "react";
import { Person } from "../interfaces";

export function useSwapiPeople(): {
  allPeople: Person[];
  loading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  error: any;
} {
  const [allPeople, setAllPeople] = useState<Person[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const getAllPeople = async () => {
    try {
      const reponseMorePeople = await fecthAllPeople(page);

      setAllPeople((prevPeople) => [...prevPeople, ...reponseMorePeople]);

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPeople();
  }, [page]);

  return { allPeople, loading, page, setPage, error };
}

const fecthAllPeople = async (page: number): Promise<Person[]> => {
  const baseURL = "https://swapi.dev/api/";
  const res = await fetch(`${baseURL}people?page=${page}`);
  const data = await res.json();

  const updatedPeopleforHomeworld = await Promise.all(
    data.results.map(async (person: Person) => {
      const planetResponse = await fetch(person.homeworld);
      const planetData = await planetResponse.json();
      const updatedPerson: Person = { ...person, homeworldInfo: planetData };
      return updatedPerson;
    })
  );

  const updatedPeopleforSpecies = await Promise.all(
    updatedPeopleforHomeworld.map(async (person: Person) => {
      const speciesResponse = await fetch(
        person.species[0] || "https://swapi.dev/api/species/1/"
      );
      const speciesData = await speciesResponse.json();
      const updatedPerson: Person = { ...person, speciesInfo: speciesData };
      return updatedPerson;
    })
  );

  return updatedPeopleforSpecies;
};

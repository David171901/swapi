import { createContext, useState, useEffect } from "react";
import { Person } from "../interfaces";

export type SwapiContextProps = {
  allPeople: Person[];
  //   getPeopleByID: (id: string) => Promise<Person>;
  //   loading: boolean;
  //   offset: number;
  //   setOffset: (value: number) => void;
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SwapiContext = createContext<SwapiContextProps>({} as SwapiContextProps);

const SwapiProvider = ({ children }: Props) => {
  const [allPeople, setAllPeople] = useState<Person[]>([]);
  const [offset, setOffset] = useState(1);

  const [loading, setLoading] = useState(true);

  // lLamar 10 personas a la API
  const getAllPeople = async () => {
    
    // const baseURL = "https://swapi.dev/api/";

    // const res = await fetch(`${baseURL}people?page=${offset}`);
    // const data = await res.json();

    // const updatedPeopleforHomeworld = await Promise.all(
    //   data.results.map(async (person: Person) => {
    //     const planetResponse = await fetch(person.homeworld);
    //     const planetData = await planetResponse.json();
    //     const updatedPerson: Person = { ...person, homeworld: planetData };
    //     return updatedPerson;
    //   })
    // );

    // const updatedPeopleforSpecies = await Promise.all(
    //   updatedPeopleforHomeworld.map(async (person: Person) => {
    //     const speciesResponse = await fetch(
    //       person.species[0] || "https://swapi.dev/api/species/1/"
    //     );
    //     const speciesData = await speciesResponse.json();
    //     const updatedPerson: Person = { ...person, species: speciesData };
    //     return updatedPerson;
    //   })
    // );

    // setAllPeople([...allPeople, ...updatedPeopleforSpecies]);

    setAllPeople([
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: {
          name: "Tatooine",
          rotation_period: "23",
          orbital_period: "304",
          diameter: "10465",
          climate: "arid",
          gravity: "1 standard",
          terrain: "desert",
          surface_water: "1",
          population: "200000",
          residents: [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/9/",
            "https://swapi.dev/api/people/11/",
            "https://swapi.dev/api/people/43/",
            "https://swapi.dev/api/people/62/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-09T13:50:49.641000Z",
          edited: "2014-12-20T20:58:18.411000Z",
          url: "https://swapi.dev/api/planets/1/",
        },
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
        species: {
          name: "Human",
          classification: "mammal",
          designation: "sentient",
          average_height: "180",
          skin_colors: "caucasian, black, asian, hispanic",
          hair_colors: "blonde, brown, black, red",
          eye_colors: "brown, blue, green, hazel, grey, amber",
          average_lifespan: "120",
          homeworld: "https://swapi.dev/api/planets/9/",
          language: "Galactic Basic",
          people: [
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/74/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T13:52:11.567000Z",
          edited: "2014-12-20T21:36:42.136000Z",
          url: "https://swapi.dev/api/species/1/",
        },
        vehicles: [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/",
        ],
        starships: [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/",
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.dev/api/people/1/",
      },
      {
        name: "C-3PO",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
        homeworld: {
          name: "Tatooine",
          rotation_period: "23",
          orbital_period: "304",
          diameter: "10465",
          climate: "arid",
          gravity: "1 standard",
          terrain: "desert",
          surface_water: "1",
          population: "200000",
          residents: [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/9/",
            "https://swapi.dev/api/people/11/",
            "https://swapi.dev/api/people/43/",
            "https://swapi.dev/api/people/62/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-09T13:50:49.641000Z",
          edited: "2014-12-20T20:58:18.411000Z",
          url: "https://swapi.dev/api/planets/1/",
        },
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
        species: {
          name: "Droid",
          classification: "artificial",
          designation: "sentient",
          average_height: "n/a",
          skin_colors: "n/a",
          hair_colors: "n/a",
          eye_colors: "n/a",
          average_lifespan: "indefinite",
          homeworld: null,
          language: "n/a",
          people: [
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/23/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T15:16:16.259000Z",
          edited: "2014-12-20T21:36:42.139000Z",
          url: "https://swapi.dev/api/species/2/",
        },
        vehicles: [],
        starships: [],
        created: "2014-12-10T15:10:51.357000Z",
        edited: "2014-12-20T21:17:50.309000Z",
        url: "https://swapi.dev/api/people/2/",
      },
      {
        name: "R2-D2",
        height: "96",
        mass: "32",
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a",
        homeworld: {
          name: "Naboo",
          rotation_period: "26",
          orbital_period: "312",
          diameter: "12120",
          climate: "temperate",
          gravity: "1 standard",
          terrain: "grassy hills, swamps, forests, mountains",
          surface_water: "12",
          population: "4500000000",
          residents: [
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/21/",
            "https://swapi.dev/api/people/35/",
            "https://swapi.dev/api/people/36/",
            "https://swapi.dev/api/people/37/",
            "https://swapi.dev/api/people/38/",
            "https://swapi.dev/api/people/39/",
            "https://swapi.dev/api/people/42/",
            "https://swapi.dev/api/people/60/",
            "https://swapi.dev/api/people/61/",
            "https://swapi.dev/api/people/66/",
          ],
          films: [
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T11:52:31.066000Z",
          edited: "2014-12-20T20:58:18.430000Z",
          url: "https://swapi.dev/api/planets/8/",
        },
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
        species: {
          name: "Droid",
          classification: "artificial",
          designation: "sentient",
          average_height: "n/a",
          skin_colors: "n/a",
          hair_colors: "n/a",
          eye_colors: "n/a",
          average_lifespan: "indefinite",
          homeworld: null,
          language: "n/a",
          people: [
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/23/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T15:16:16.259000Z",
          edited: "2014-12-20T21:36:42.139000Z",
          url: "https://swapi.dev/api/species/2/",
        },
        vehicles: [],
        starships: [],
        created: "2014-12-10T15:11:50.376000Z",
        edited: "2014-12-20T21:17:50.311000Z",
        url: "https://swapi.dev/api/people/3/",
      },
      {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male",
        homeworld: {
          name: "Tatooine",
          rotation_period: "23",
          orbital_period: "304",
          diameter: "10465",
          climate: "arid",
          gravity: "1 standard",
          terrain: "desert",
          surface_water: "1",
          population: "200000",
          residents: [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/9/",
            "https://swapi.dev/api/people/11/",
            "https://swapi.dev/api/people/43/",
            "https://swapi.dev/api/people/62/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-09T13:50:49.641000Z",
          edited: "2014-12-20T20:58:18.411000Z",
          url: "https://swapi.dev/api/planets/1/",
        },
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
        species: {
          name: "Human",
          classification: "mammal",
          designation: "sentient",
          average_height: "180",
          skin_colors: "caucasian, black, asian, hispanic",
          hair_colors: "blonde, brown, black, red",
          eye_colors: "brown, blue, green, hazel, grey, amber",
          average_lifespan: "120",
          homeworld: "https://swapi.dev/api/planets/9/",
          language: "Galactic Basic",
          people: [
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/74/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T13:52:11.567000Z",
          edited: "2014-12-20T21:36:42.136000Z",
          url: "https://swapi.dev/api/species/1/",
        },
        vehicles: [],
        starships: ["https://swapi.dev/api/starships/13/"],
        created: "2014-12-10T15:18:20.704000Z",
        edited: "2014-12-20T21:17:50.313000Z",
        url: "https://swapi.dev/api/people/4/",
      },
      {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female",
        homeworld: {
          name: "Alderaan",
          rotation_period: "24",
          orbital_period: "364",
          diameter: "12500",
          climate: "temperate",
          gravity: "1 standard",
          terrain: "grasslands, mountains",
          surface_water: "40",
          population: "2000000000",
          residents: [
            "https://swapi.dev/api/people/5/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/81/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T11:35:48.479000Z",
          edited: "2014-12-20T20:58:18.420000Z",
          url: "https://swapi.dev/api/planets/2/",
        },
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
        species: {
          name: "Human",
          classification: "mammal",
          designation: "sentient",
          average_height: "180",
          skin_colors: "caucasian, black, asian, hispanic",
          hair_colors: "blonde, brown, black, red",
          eye_colors: "brown, blue, green, hazel, grey, amber",
          average_lifespan: "120",
          homeworld: "https://swapi.dev/api/planets/9/",
          language: "Galactic Basic",
          people: [
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/74/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T13:52:11.567000Z",
          edited: "2014-12-20T21:36:42.136000Z",
          url: "https://swapi.dev/api/species/1/",
        },
        vehicles: ["https://swapi.dev/api/vehicles/30/"],
        starships: [],
        created: "2014-12-10T15:20:09.791000Z",
        edited: "2014-12-20T21:17:50.315000Z",
        url: "https://swapi.dev/api/people/5/",
      },
      {
        name: "Owen Lars",
        height: "178",
        mass: "120",
        hair_color: "brown, grey",
        skin_color: "light",
        eye_color: "blue",
        birth_year: "52BBY",
        gender: "male",
        homeworld: {
          name: "Tatooine",
          rotation_period: "23",
          orbital_period: "304",
          diameter: "10465",
          climate: "arid",
          gravity: "1 standard",
          terrain: "desert",
          surface_water: "1",
          population: "200000",
          residents: [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/9/",
            "https://swapi.dev/api/people/11/",
            "https://swapi.dev/api/people/43/",
            "https://swapi.dev/api/people/62/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-09T13:50:49.641000Z",
          edited: "2014-12-20T20:58:18.411000Z",
          url: "https://swapi.dev/api/planets/1/",
        },
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
        species: {
          name: "Human",
          classification: "mammal",
          designation: "sentient",
          average_height: "180",
          skin_colors: "caucasian, black, asian, hispanic",
          hair_colors: "blonde, brown, black, red",
          eye_colors: "brown, blue, green, hazel, grey, amber",
          average_lifespan: "120",
          homeworld: "https://swapi.dev/api/planets/9/",
          language: "Galactic Basic",
          people: [
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/74/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T13:52:11.567000Z",
          edited: "2014-12-20T21:36:42.136000Z",
          url: "https://swapi.dev/api/species/1/",
        },
        vehicles: [],
        starships: [],
        created: "2014-12-10T15:52:14.024000Z",
        edited: "2014-12-20T21:17:50.317000Z",
        url: "https://swapi.dev/api/people/6/",
      },
      {
        name: "Beru Whitesun lars",
        height: "165",
        mass: "75",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "blue",
        birth_year: "47BBY",
        gender: "female",
        homeworld: {
          name: "Tatooine",
          rotation_period: "23",
          orbital_period: "304",
          diameter: "10465",
          climate: "arid",
          gravity: "1 standard",
          terrain: "desert",
          surface_water: "1",
          population: "200000",
          residents: [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/9/",
            "https://swapi.dev/api/people/11/",
            "https://swapi.dev/api/people/43/",
            "https://swapi.dev/api/people/62/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-09T13:50:49.641000Z",
          edited: "2014-12-20T20:58:18.411000Z",
          url: "https://swapi.dev/api/planets/1/",
        },
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
        species: {
          name: "Human",
          classification: "mammal",
          designation: "sentient",
          average_height: "180",
          skin_colors: "caucasian, black, asian, hispanic",
          hair_colors: "blonde, brown, black, red",
          eye_colors: "brown, blue, green, hazel, grey, amber",
          average_lifespan: "120",
          homeworld: "https://swapi.dev/api/planets/9/",
          language: "Galactic Basic",
          people: [
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/74/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T13:52:11.567000Z",
          edited: "2014-12-20T21:36:42.136000Z",
          url: "https://swapi.dev/api/species/1/",
        },
        vehicles: [],
        starships: [],
        created: "2014-12-10T15:53:41.121000Z",
        edited: "2014-12-20T21:17:50.319000Z",
        url: "https://swapi.dev/api/people/7/",
      },
      {
        name: "R5-D4",
        height: "97",
        mass: "32",
        hair_color: "n/a",
        skin_color: "white, red",
        eye_color: "red",
        birth_year: "unknown",
        gender: "n/a",
        homeworld: {
          name: "Tatooine",
          rotation_period: "23",
          orbital_period: "304",
          diameter: "10465",
          climate: "arid",
          gravity: "1 standard",
          terrain: "desert",
          surface_water: "1",
          population: "200000",
          residents: [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/9/",
            "https://swapi.dev/api/people/11/",
            "https://swapi.dev/api/people/43/",
            "https://swapi.dev/api/people/62/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-09T13:50:49.641000Z",
          edited: "2014-12-20T20:58:18.411000Z",
          url: "https://swapi.dev/api/planets/1/",
        },
        films: ["https://swapi.dev/api/films/1/"],
        species: {
          name: "Droid",
          classification: "artificial",
          designation: "sentient",
          average_height: "n/a",
          skin_colors: "n/a",
          hair_colors: "n/a",
          eye_colors: "n/a",
          average_lifespan: "indefinite",
          homeworld: null,
          language: "n/a",
          people: [
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/23/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T15:16:16.259000Z",
          edited: "2014-12-20T21:36:42.139000Z",
          url: "https://swapi.dev/api/species/2/",
        },
        vehicles: [],
        starships: [],
        created: "2014-12-10T15:57:50.959000Z",
        edited: "2014-12-20T21:17:50.321000Z",
        url: "https://swapi.dev/api/people/8/",
      },
      {
        name: "Biggs Darklighter",
        height: "183",
        mass: "84",
        hair_color: "black",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "24BBY",
        gender: "male",
        homeworld: {
          name: "Tatooine",
          rotation_period: "23",
          orbital_period: "304",
          diameter: "10465",
          climate: "arid",
          gravity: "1 standard",
          terrain: "desert",
          surface_water: "1",
          population: "200000",
          residents: [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/9/",
            "https://swapi.dev/api/people/11/",
            "https://swapi.dev/api/people/43/",
            "https://swapi.dev/api/people/62/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-09T13:50:49.641000Z",
          edited: "2014-12-20T20:58:18.411000Z",
          url: "https://swapi.dev/api/planets/1/",
        },
        films: ["https://swapi.dev/api/films/1/"],
        species: {
          name: "Human",
          classification: "mammal",
          designation: "sentient",
          average_height: "180",
          skin_colors: "caucasian, black, asian, hispanic",
          hair_colors: "blonde, brown, black, red",
          eye_colors: "brown, blue, green, hazel, grey, amber",
          average_lifespan: "120",
          homeworld: "https://swapi.dev/api/planets/9/",
          language: "Galactic Basic",
          people: [
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/74/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T13:52:11.567000Z",
          edited: "2014-12-20T21:36:42.136000Z",
          url: "https://swapi.dev/api/species/1/",
        },
        vehicles: [],
        starships: ["https://swapi.dev/api/starships/12/"],
        created: "2014-12-10T15:59:50.509000Z",
        edited: "2014-12-20T21:17:50.323000Z",
        url: "https://swapi.dev/api/people/9/",
      },
      {
        name: "Obi-Wan Kenobi",
        height: "182",
        mass: "77",
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
        birth_year: "57BBY",
        gender: "male",
        homeworld: {
          name: "Stewjon",
          rotation_period: "unknown",
          orbital_period: "unknown",
          diameter: "0",
          climate: "temperate",
          gravity: "1 standard",
          terrain: "grass",
          surface_water: "unknown",
          population: "unknown",
          residents: ["https://swapi.dev/api/people/10/"],
          films: [],
          created: "2014-12-10T16:16:26.566000Z",
          edited: "2014-12-20T20:58:18.452000Z",
          url: "https://swapi.dev/api/planets/20/",
        },
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
        species: {
          name: "Human",
          classification: "mammal",
          designation: "sentient",
          average_height: "180",
          skin_colors: "caucasian, black, asian, hispanic",
          hair_colors: "blonde, brown, black, red",
          eye_colors: "brown, blue, green, hazel, grey, amber",
          average_lifespan: "120",
          homeworld: "https://swapi.dev/api/planets/9/",
          language: "Galactic Basic",
          people: [
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/74/",
          ],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          created: "2014-12-10T13:52:11.567000Z",
          edited: "2014-12-20T21:36:42.136000Z",
          url: "https://swapi.dev/api/species/1/",
        },
        vehicles: ["https://swapi.dev/api/vehicles/38/"],
        starships: [
          "https://swapi.dev/api/starships/48/",
          "https://swapi.dev/api/starships/59/",
          "https://swapi.dev/api/starships/64/",
          "https://swapi.dev/api/starships/65/",
          "https://swapi.dev/api/starships/74/",
        ],
        created: "2014-12-10T16:16:29.192000Z",
        edited: "2014-12-20T21:17:50.325000Z",
        url: "https://swapi.dev/api/people/10/",
      },
    ]);
    setLoading(false);
  };

  useEffect(() => {
    getAllPeople();
  }, [offset]);

  return (
    <SwapiContext.Provider
      value={{
        allPeople,
      }}
    >
      {children}
    </SwapiContext.Provider>
  );
};

export { SwapiProvider };
export default SwapiContext;

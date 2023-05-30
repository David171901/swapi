export interface PeopleResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Person[];
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string | Planet;
  films: string[];
  species: string[] | Species;
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  [x: string]: any;
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Species {
    name: string
    classification: string
    designation: string
    average_height: string
    skin_colors: string
    hair_colors: string
    eye_colors: string
    average_lifespan: string
    homeworld: string | null
    language: string
    people: string[]
    films: string[]
    created: string
    edited: string
    url: string
}
  

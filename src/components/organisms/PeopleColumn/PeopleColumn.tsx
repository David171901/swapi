import useSwapi from "../../../hooks/useSwapi";
import { Planet } from "../../../interfaces";
import LoadingCell from "../../molecules/LoadingCell/LoadingCell";
import NoticeCell from "../../molecules/NoticeCell/NoticeCell";
import PersonCell from "../../molecules/PersonCell/PersonCell";

function isPlanet(value: any): value is Planet {
  return (value as Planet).name !== undefined;
}

const PeopleColumn = () => {
  const { allPeople, loading, error } = useSwapi();

  if (error)
    return (
      <div>
        <NoticeCell label="Failed to Load Data"></NoticeCell>
      </div>
    );

  return (
    <div>
      {loading ? (
        <LoadingCell label="Loading"></LoadingCell>
      ) : (
        <>
          {allPeople.map((person) => (
            <PersonCell
              key={person.url}
              description={`${
                Array.isArray(person.species)
                  ? person.species[0]
                  : person.species.name
              } from ${
                isPlanet(person.homeworld)
                  ? person.homeworld.name
                  : person.homeworld
              }`}
              name={person.name}
              id={person.url ? person.url.split("/").filter(Boolean).pop() || "" : ""}
            ></PersonCell>
          ))}
        </>
      )}
    </div>
  );
};

export default PeopleColumn;

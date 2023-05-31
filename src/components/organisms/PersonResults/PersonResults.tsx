import { useParams } from "react-router-dom";
import useSwapi from "../../../hooks/useSwapi";
import DataCell from "../../molecules/DataCell/DataCell";
import SectionHeader from "../../molecules/SectionHeader/SectionHeader";
import { Person, Vehicle } from "../../../interfaces";
import { useEffect, useState } from "react";

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const PersonResults = () => {
  const { getPeopleByID, loading } = useSwapi();
  const { peopleId } = useParams();
  const [person, setPerson] = useState<Person>();

  const fetchPerson = async (id: string | undefined) => {
    const data = await getPeopleByID(id!);
    setPerson(data);
  };

  useEffect(() => {
    fetchPerson(peopleId);
  }, [peopleId]);

  if (loading) return <></>;

  return (
    <div>
      {person && (
        <>
          <SectionHeader label="General Information"></SectionHeader>
          <DataCell
            leftText="Eye Color"
            rightText={`${capitalizeFirstLetter(person!.eye_color)}`}
          ></DataCell>
          <DataCell
            leftText="Hair Color"
            rightText={`${capitalizeFirstLetter(person!.hair_color)}`}
          ></DataCell>
          <DataCell
            leftText="Skin Color"
            rightText={`${capitalizeFirstLetter(person!.skin_color)}`}
          ></DataCell>
          <DataCell
            leftText="Birth Year"
            rightText={`${capitalizeFirstLetter(person!.birth_year)}`}
          ></DataCell>
          <SectionHeader label="Vehicles"></SectionHeader>
          {person.vehiclesInfo!.map((vehicle) => (
            <DataCell
              key={vehicle.name}
              leftText={vehicle.name}
              rightText=""
            ></DataCell>
          ))}
        </>
      )}
    </div>
  );
};

export default PersonResults;

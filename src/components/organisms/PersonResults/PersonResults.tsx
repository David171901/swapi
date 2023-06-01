import { useParams } from "react-router-dom";
import { DataCell, SectionHeader, TopBar } from "../../molecules";
import { useSwapiPerson } from "../../../hooks/useSwapiPerson";
import useSwapiContext from "../../../hooks/useSwapiContext";

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const PersonResults = () => {
  const { peopleId } = useParams();
  const { person, loading } = useSwapiPerson(peopleId!);
  const { screenSize } = useSwapiContext();

  if (loading)
    return (
      <>
        {screenSize.width < 640 && <TopBar label="" showIcon={true}></TopBar>}
        <SectionHeader label="General Information"></SectionHeader>
        <DataCell leftText="Eye Color" rightText=""></DataCell>
        <DataCell leftText="Hair Color" rightText=""></DataCell>
        <DataCell leftText="Skin Color" rightText=""></DataCell>
        <DataCell leftText="Birth Year" rightText=""></DataCell>
        <SectionHeader label="Vehicles"></SectionHeader>
      </>
    );

  return (
    <div>
      {person && (
        <>
          {screenSize.width < 640 && (
            <TopBar label={person.name} showIcon={true}></TopBar>
          )}
          <SectionHeader label="General Information"></SectionHeader>
          <DataCell
            leftText="Eye Color"
            rightText={`${capitalizeFirstLetter(person.eye_color)}`}
          ></DataCell>
          <DataCell
            leftText="Hair Color"
            rightText={`${capitalizeFirstLetter(person.hair_color)}`}
          ></DataCell>
          <DataCell
            leftText="Skin Color"
            rightText={`${capitalizeFirstLetter(person.skin_color)}`}
          ></DataCell>
          <DataCell
            leftText="Birth Year"
            rightText={`${capitalizeFirstLetter(person.birth_year)}`}
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

import { useParams } from "react-router-dom";
import styles from "./PersonResults.module.css";
import { DataCell, Header, SectionHeader } from "../../molecules";
import { useSwapiPerson } from "../../../hooks/useSwapiPerson";
import useSwapiContext from "../../../hooks/useSwapiContext";

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const PersonResults = () => {
  const { peopleId } = useParams();
  const { person, loading } = useSwapiPerson(peopleId!);
  const { screenSize } = useSwapiContext();

  if (loading) return <></>;

  return (
    <div className={styles.personResults}>
      {person && (
        <>
          {screenSize.width < 640 && <Header label={person.name} showIcon={true}></Header>}
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

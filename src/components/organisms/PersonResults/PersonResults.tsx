import DataCell from "../../molecules/DataCell/DataCell"
import SectionHeader from "../../molecules/SectionHeader/SectionHeader"

const PersonResults = () => {
  return (
    <div>
        <SectionHeader label="General Information"></SectionHeader>
        <DataCell leftText="Eye Color" rightText="Blue"></DataCell>
        <DataCell leftText="Eye Color" rightText="Blue"></DataCell>
        <DataCell leftText="Eye Color" rightText="Blue"></DataCell>
        <DataCell leftText="Eye Color" rightText="Blue"></DataCell>
        <SectionHeader label="Vehicles"></SectionHeader>
        <DataCell leftText="Snowspeeder" rightText=""></DataCell>
        <DataCell leftText="Snowspeeder" rightText=""></DataCell>
    </div>
  )
}

export default PersonResults
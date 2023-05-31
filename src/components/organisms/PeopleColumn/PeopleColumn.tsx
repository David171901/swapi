import InfiniteScroll from "react-infinite-scroll-component";
import useSwapi from "../../../hooks/useSwapi";
import LoadingCell from "../../molecules/LoadingCell/LoadingCell";
import NoticeCell from "../../molecules/NoticeCell/NoticeCell";
import PersonCell from "../../molecules/PersonCell/PersonCell";
import styles from "./PeopleColumn.module.css";

const PeopleColumn = () => {
  const { allPeople, loading, error, setOffset, offset } = useSwapi();
  console.log("🚀 ~ file: PeopleColumn.tsx:10 ~ PeopleColumn ~ allPeople:", allPeople)

  if (error)
    return (
      <div>
        <NoticeCell label="Failed to Load Data"></NoticeCell>
      </div>
    );

  return (
    <div className={styles.peopleColumn}>
      {loading ? (
        <LoadingCell label="Loading"></LoadingCell>
      ) : (
        <InfiniteScroll
          dataLength={allPeople.length}
          hasMore={true}
          next={() => setOffset(offset + 1)}
          loader={<LoadingCell label="Loading"></LoadingCell>}
        >
          <>
            {allPeople.map((person) => (
              <PersonCell
                key={person.name}
                description={`${person.speciesInfo!.name} from ${
                  person.homeworldInfo!.name
                }`}
                name={person.name}
                id={
                  person.url
                    ? person.url.split("/").filter(Boolean).pop() || ""
                    : ""
                }
              ></PersonCell>
            ))}
          </>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default PeopleColumn;

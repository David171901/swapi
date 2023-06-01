import InfiniteScroll from "react-infinite-scroll-component";
import useSwapiContext from "../../../hooks/useSwapiContext";
import styles from "./PeopleColumn.module.css";
import { LoadingCell, NoticeCell, PersonCell } from "../../molecules";

export const PeopleColumn = () => {
  const { allPeople, loading, error, setPage, page } = useSwapiContext();

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
          hasMore={page < 3}
          next={() => setPage(page + 1)}
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
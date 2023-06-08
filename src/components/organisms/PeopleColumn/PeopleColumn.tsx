import InfiniteScroll from "react-infinite-scroll-component";
import useSwapiContext from "../../../hooks/useSwapiContext";
import { LoadingCell, NoticeCell, PersonCell } from "../../molecules";
import styled from "styled-components";

const PeopleColumnContainer = styled.div`
  min-height: 100vh;
`

export const PeopleColumn = () => {
  const { allPeople, loading, error, setPage, page, screenSize } = useSwapiContext();

  if (error)
    return (
      <div>
        <NoticeCell label="Failed to Load Data"></NoticeCell>
      </div>
    );

  return (
    <PeopleColumnContainer>
      {loading ? (
        <LoadingCell label="Loading"></LoadingCell>
      ) : (
        <InfiniteScroll
          dataLength={allPeople.length}
          hasMore={page < 9}
          next={() => setPage(page + 1)}
          loader={<LoadingCell label="Loading"></LoadingCell>}
          scrollableTarget={`${screenSize.width > 640 ? 'scrollableDiv' : ''}`}
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
    </PeopleColumnContainer>
  );
};
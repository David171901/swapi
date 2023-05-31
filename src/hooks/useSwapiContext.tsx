import { useContext } from "react";
import SwapiContext from "../context/SwapiProvider";

const useSwapiContext = () => {
  return useContext(SwapiContext);
};

export default useSwapiContext;

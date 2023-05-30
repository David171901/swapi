import { useContext } from "react";
import SwapiContext from "../context/SwapiProvider";

const useSwapi = () => {
    return useContext(SwapiContext)
}

export default useSwapi;

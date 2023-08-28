import {useState, useEffect} from "react";
import { csv } from "d3-fetch";

const url = "src/Datas/nwmdal.csv"

const row = d => {
    d.Amanda = +d["school"];
    d.Amanda = +d["work"];
    d.Amanda = +d["bodybuilding"];
    d.Amanda = +d["programming"];
    d.Amanda = +d["freetime"];
    d.year = +d["year"];
      return d;
  };

export const useData = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        // Call d3.csv using row function as accessor
        csv(url, row).then(setData);
    }, []);
    return data;
}
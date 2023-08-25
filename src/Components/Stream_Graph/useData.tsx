import {useState, useEffect} from "react";
import { csv } from "d3-fetch";

const url = "https://raw.githubusercontent.com/estebanix/ISO/main/vizfolio_stream.csv?token=GHSAT0AAAAAACF2K2TMYRSW6QCM5ATT4COKZHIOUQA"

const row = d => {
    d.Amanda = +d["school"]
    d.Ashley = +d["work"]
    d.Betty = +d["bodybuilding"]
    d.Deborah = +d["programming"]
    d.year = +d["year"]
    return d;
}

export const useData = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        // Call d3.csv using row function as accessor
        csv(url, row).then(setData);
    }, []);
    return data;
}
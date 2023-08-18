import { createContext, useState } from 'react';
import Articles from "../Datas/articles.json";
import VizDat from "../Datas/data.json";

export interface ContextType {
    articlesData: any[];
    setArticlesData: (data: any) => void; 
    vizData: any[];
    setVizData: (data: any) => void; 
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
    const [articlesData, setArticlesData] = useState(Articles);
    const [vizData, setVizData] = useState(VizDat);
    
    return (
        <Context.Provider
            value={{
                articlesData,
                setArticlesData,
                vizData
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;

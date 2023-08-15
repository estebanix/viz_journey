import { createContext, useState } from 'react';
import Articles from "../Datas/articles.json";

export interface ContextType {
    articlesData: any[];
    setArticlesData: (data: any) => void; 
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
    const [articlesData, setArticlesData] = useState(Articles);

    return (
        <Context.Provider
            value={{
                articlesData,
                setArticlesData
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;

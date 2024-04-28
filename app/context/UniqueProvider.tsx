import React from "react";

export type TUniqueProvider = {
    uuid: string;
}

export const UniqueContext = React.createContext<TUniqueProvider | null>(null);

interface UniqueProvider {
    children: React.ReactNode;
    uuid: string;
}

const UniqueProvider = ({children, uuid}: UniqueProvider) => {

    return (
        <UniqueContext.Provider value={{uuid}}>
            {
                children
            }
        </UniqueContext.Provider>
    )
}

export default UniqueProvider;
import React, {useState} from "react";

export type TBlockContext = {
    selectedAllCount: number | undefined;
    addSelectedAllCount: () => void;
}

export const BlockContext = React.createContext<TBlockContext | null>(null);

const BlockProvider = ({children}: { children: React.ReactNode }) => {
    const [selectedAllCount, setSelectedAllCount] = useState<number>(0);

    const addSelectedAllCount = () => {
        if (selectedAllCount != 1) {
            setSelectedAllCount(prevState => ++prevState);
        } else {
            setSelectedAllCount(0);
        }
    }

    return (
        <BlockContext.Provider value={{selectedAllCount, addSelectedAllCount}}>
            {
                children
            }
        </BlockContext.Provider>
    )
}

export default BlockProvider;
import {createContext, ReactNode, useContext, useState} from "react";


type blockContextType = {
    blocks: Block[];
    addBlock: (block: Block) => void;
    removeBlock: (block: Block) => boolean;
};


interface Block {
    uuid: string;
    value: string;
    type: string;
}

export const useBlock = () => {
    const [blocks, setBlocks] = useState<Block[]>([]);

    return { blocks, setBlocks };
};
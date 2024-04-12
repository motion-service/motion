"use client"

import {InputTitle} from "@/app/components/ui/input-title";
import React, {useEffect, useRef, useState} from "react";
import {useQuery} from "react-query";
import {Button} from "@/app/components/ui/button";
import {Block} from "@/app/components/props/block";
import {LoadPages} from "@/app/lib/page/page";
import {CreateBlock} from "@/app/lib/block/block";

interface EditorProp {
    uuid: string;
    owner: string;
}

export const Editor: React.FC<EditorProp> = ({uuid, owner}: EditorProp) => {
    const {data, error} = useQuery(['pages', uuid], async () => await LoadPages(owner));
    const [currentPage, setCurrentPage] = useState<Page>();

    const [blocks, setBlocks] = useState<IBlock[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>();

    const [selectCount, setSelectCount] = useState<number>(0);

    useEffect(() => {
        console.log()
    });


    /**
     * Loaded Pages & set Current Page
     */
    useEffect(() => {
        const filteredPages = data?.filter(page => page.metadata.url === uuid);

        if (filteredPages !== undefined) {
            setCurrentPage(filteredPages[0])
        }
    }, [data]);

    /**
     * Loaded current page's block
     */
    useEffect(() => {
        if (currentPage !== undefined)
            setBlocks(currentPage.blocks);

    }, [currentPage]);

    /**
     * Added block into contents & send fetch request
     */
    const addNewBlock = () => {
        CreateBlock(uuid).then();
        let new_block: IBlock = {
            content: [],
            type: "Text",
            value: ""

        }

        setBlocks(prevBlocks => [...prevBlocks, new_block]);
    };

    const onDeleteHandler = () => {

    }

    const handleSelectAll = () => {
        if (selectCount == 1) {
            setSelectCount(0);

            //TODO select all
            return;
        }

        setSelectCount(prevState => ++prevState);
    }
    const handleArrowUp = () => {

    }

    const handleAddBlock = () => {

    }

    const handleDelete = () => {
        setBlocks(blocks.slice(selectedIndex));
    }

    return (
        <div className="flex-grow overflow-y-auto">
            <div className="max-w-screen-xl mx-auto px-8">
                <div className="w-full max-w-[1200px] sm:max-w-[700px] mx-auto">
                    <div className="flex">
                        <Button variant="ghost">아이콘 추가</Button>
                        <Button variant="ghost">커버 추가</Button>
                        <Button variant="ghost">댓글 추가</Button>
                    </div>

                    <InputTitle url={uuid} title={currentPage?.metadata.title} onEnter={addNewBlock}
                                onDelete={onDeleteHandler}/>

                    {
                        blocks?.map((block, index) => {
                            return (
                                <Block block={block} key={index}
                                       url={uuid}
                                       index={index}
                                       setSelectedIndex={setSelectedIndex}
                                       handleAddBlock={handleAddBlock} handleArrowUp={handleArrowUp}
                                       handleDelete={handleDelete} handleSelectAll={handleSelectAll}/>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

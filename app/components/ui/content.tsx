import {InputTest} from "@/app/components/props/input-test";
import React, {useContext, useEffect} from "react";
import {BlockContext} from "@/app/context/BlockProvider";

export const Content = () => {
    let blockContext = useContext(BlockContext);

    return (
        <div className="row-start-2 col-start-2 break-words">
            {/*<InputTest key={1}></InputTest>*/}
            {
                blockContext?.blocks ? (
                    blockContext.blocks.map((value, index) => (
                        <InputTest key={index} block={value} selectedIndex={index}></InputTest>
                    ))
                ) : (
                    <p>No blocks available</p>
                )
            }
        </div>
    )
}

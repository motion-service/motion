import {InputTest} from "@/app/components/props/input-test";
import React from "react";

export const Content = () => {
    
    return (
        <div className="row-start-2 col-start-2 break-words">
            {
                Array.from({length: 5}).map((value, index) => (

                    <InputTest key={index}></InputTest>
                ))
            }
        </div>
    )
}
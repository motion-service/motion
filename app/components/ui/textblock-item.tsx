import {clsx} from "clsx";
import React from "react";

interface TextBlockItem {
    result: IResult
    index: number;
}

export const TextBlockItem = ({result, index}: TextBlockItem) => {

    return (
        <span key={index}
              className={clsx({
                  [`font-bold`]: result.style?.bold,
                  [`italic`]: result.style?.italic,
                  [`underline`]: result.style?.underline,
                  [`line-through`]: result.style?.strike,
                  [`[text-decoration:underline_line-through]`]: result.style?.underline && result.style?.strike
              })}>
            {
                result.text
            }
        </span>
    )
}
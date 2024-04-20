"use client"
import {useEffect} from "react";
import {ContextMenuDemo} from "@/app/components/props/context-demo";
import {cn} from "@/app/lib/utils";

interface TableProp {
    rows: string[][];
}

export const Table = ({rows}: TableProp) => {

    useEffect(() => {
        console.log(rows)
    }, []);


    const handleClick = () => {

    }


    return (
        <table>
            <tbody className="border-separate">
            {
                rows.map((cells, rowPosition) => {

                    console.log(`rows `, rowPosition)
                    return (
                        <tr key={rowPosition} onClick={() => {
                            console.log("clicked row", rowPosition)
                        }}>
                            {
                                cells.map((cell, cellPosition) => {
                                    console.log(`key`, cellPosition)

                                    return (
                                        <td key={cellPosition}
                                            className="border border-separate border-slate-700"
                                            suppressContentEditableWarning={true}
                                            contentEditable={true} onClick={() => {
                                            handleClick();
                                            console.log("clicked cell", cellPosition)
                                        }}>
                                            <div className={""}>
                                                {
                                                    cell
                                                }
                                            </div>

                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
"use client"
import React, {forwardRef, useState} from "react";
import {TextBlockItem} from "@/app/components/ui/textblock-item";
import {useTextBlock} from "@/app/hook/useTextBlock";

interface TextProp {
    words: IWord
}

export const TextBlock = forwardRef(function TextBlock({words}: TextProp, ref) {
    let [selectedIndex, setSelectedIndex] = useState<number>();
    let {results} = useTextBlock({words});

    const onPaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
        let test = event.clipboardData;
        let html = test.getData("text/html");

        let document = new DOMParser().parseFromString(html, "text/html");
        let table = document.getElementsByTagName("table")[0];

        if (table !== undefined) {
            event.preventDefault();

            let head = table.tHead;
            let rows = table.rows;

            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let cells = row.cells;
                for (let j = 0; j < cells.length; j++) {
                    let cell = cells[j];
                    let content = cell.textContent;

                    console.log(content)
                }
            }
        }
    }

    const onCopy = (event: React.ClipboardEvent<HTMLDivElement>) => {

    }


    const onCut = (event: React.ClipboardEvent<HTMLDivElement>) => {

    }

    const onMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();

    }

    const onInput = (event: React.FormEvent<HTMLDivElement>) => {
        let textContent = event.currentTarget.textContent;
    }

    const onArrowUp = () => {

    }

    const onArrowDown = () => {

    }

    const onScreenCapture = () => {
        let focusNode = document.getSelection()?.focusNode?.textContent;

        if (focusNode !== undefined || focusNode !== null) {
            let result = results.filter(result => result.text == focusNode?.toString())[0];
            let index = results.indexOf(result);

            setSelectedIndex(index);
        }
    }

    return (
        <div className="min-h-10" contentEditable={"plaintext-only"}
             suppressContentEditableWarning={true}

             onInput={(event) => {
                 onInput(event);
             }}

             onKeyDown={event => {
                 let key = event.key;

                 switch (key) {
                     case "ArrowUp":
                         onArrowUp();
                         break;

                     case "ArrowDown":
                         onArrowDown();
                         break;
                 }
             }}

             onBlur={(event) => {

             }}

             onCopy={(event) => {
                 onCopy(event);
             }}

             onPaste={(event) => {
                 onPaste(event);
             }}

             onCut={(event) => {
                 onCut(event);
             }}

             onMouseEnter={event => {
                 onMouseEnter(event);
             }}

             onSelectCapture={() => {
                 onScreenCapture()
             }}>
            {
                results.length !== 1 && results.map((result, index) => {
                    return (
                        <TextBlockItem result={result} index={index} key={index}/>
                    )
                })
            }
        </div>
    );
})
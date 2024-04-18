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
        event.preventDefault();
        let clipboardData = event.clipboardData.getData("text");
        if (selectedIndex !== undefined) {
            let result = results[selectedIndex];
            let result_text = result.text;
            let anchor = document.getSelection()?.anchorOffset;

            if (anchor !== undefined) {
                let test = result_text.charAt(anchor);
                test += clipboardData;

                let new_result: IResult = {
                    text: test,
                    style: result.style
                }

                results.splice(results.indexOf(result), 1, new_result);

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
        <div className="min-h-10" contentEditable={true}
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
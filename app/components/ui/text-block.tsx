"use client"
import React, {useState} from "react";
import {TextBlockItem} from "@/app/components/ui/textblock-item";
import {useTextBlock} from "@/app/hook/useTextBlock";

interface TextProp {
    words: IWord
}

export const TextBlock: React.FC<TextProp> = ({words}) => {
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
                let test = result_text.charAt(anchor - 1);
                test += clipboardData;

                let new_result: IResult = {
                    text: test,
                    style: result.style
                }

                results.splice(results.indexOf(result), 1, new_result)
            }
        }
    }

    const onCopy = (event: React.ClipboardEvent<HTMLDivElement>) => {

    }

    const onMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {

    }

    const onCut = (event: React.ClipboardEvent<HTMLDivElement>) => {

    }

    const onMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();

    }

    const onInput = (event: React.FormEvent<HTMLDivElement>) => {
        let textContent = event.currentTarget.textContent;
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

             onBlur={(event) => {

             }}

             onCopy={(event) => {
                 onCopy(event);
             }}

             onPaste={(event) => {
                 onPaste(event);
             }}

             onMouseUp={(event) => {
                 onMouseUp(event);
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
};
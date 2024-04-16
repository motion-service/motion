"use client"
import React, {useEffect, useState} from "react";
import {TextBlockItem} from "@/app/components/ui/textblock-item";

interface TextProp {
    words: IWord
}

const generate_range = (start: number, end: number) => Array.from({length: (end - start)}, (v, k) => k + start);

export const TextBlock: React.FC<TextProp> = ({words}) => {
    const [results, setResults] = useState<IResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>();

    useEffect(() => {
        let text = words.text;
        let newResults: IResult[] = [];

        if (words.style.length !== 0) {
            let first_style = words.style[0];
            let start = first_style.range?.start;

            if (start !== 0 && start !== undefined) {
                let result = "";
                let result_range = generate_range(0, start);

                result_range.map(value => {
                    let word = text.charAt(value);
                    result += word;
                });

                newResults.push({
                    text: result
                });

                setResults(newResults)
            }

            words.style.forEach(style => {
                let style_range = style.range;

                let start = style_range?.start;
                let end = style_range?.end;

                if (start !== undefined && end !== undefined) {
                    let result_index = generate_range(start, end);
                    let result_text: string = "";

                    result_index.forEach(index => {
                        let test = text.charAt(index);
                        result_text += test;
                    });

                    newResults.push({
                        text: result_text,
                        style: style
                    });

                    setResults(newResults)
                }
            });

            let last_style = words.style[words.style.length - 1];
            let end = last_style.range?.end;

            if (end !== undefined) {
                if (end !== words.text.length) {
                    let length = words.text.length;

                    let result_range = generate_range(end, length);
                    let result = "";

                    result_range.map(value => {
                        let word = text.charAt(value);
                        result += word;
                    })

                    newResults.push({
                        text: result
                    });

                    setResults(newResults)
                }
            }
        } else {
            newResults.push({
                text: ''
            });

            setResults(newResults)
        }
    }, []);

    return (
        <div className="min-h-10" contentEditable={true}
             suppressContentEditableWarning={true}
             onSelectCapture={event => {
                 let focusNode = document.getSelection()?.focusNode?.textContent;

                 if (focusNode !== undefined || focusNode !== null) {
                     let result = results.filter(result => result.text == focusNode?.toString())[0];
                     let index = results.indexOf(result);

                     setSelectedIndex(index);
                 }
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
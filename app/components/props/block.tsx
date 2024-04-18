"use client"
import React, {SyntheticEvent, useEffect, useRef, useState} from "react";
import {TextBlock} from "@/app/components/ui/text-block";
import {TextMenu} from "@/app/components/ui/text-menu";

interface BlockProp {
    block: IBlock;
    setSelectedIndex: React.Dispatch<React.SetStateAction<any>>
    url: string;
    index?: number;
}

export const Block = ({
                          url,
                          index,
                          block,
                          setSelectedIndex

                      }: BlockProp) => {
    const [isHovered, setHovered] = useState<boolean>();
    const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});
    const [selectedText, setSelectedText] = useState('');
    const [start, setStart] = useState<number>();
    const [end, setEnd] = useState<number>();
    const [originText, setOriginText] = useState<string>();
    const ref = useRef(null);
    useEffect(() => {
        let test = "";

        // block.content.map(content => {
        //     let text = content.text;
        //     test += text;
        // })

        setOriginText(test);
    }, []);
    const handleSelect = (event: SyntheticEvent<HTMLDivElement>) => {
        const selection = window.getSelection();
        let selected_text = selection!.toString();

        let text_first = selected_text.charAt(0);
        let text_last = selected_text.charAt(selected_text.length - 1);

        // let test =orgText.ma
        let start = originText!.indexOf(text_first); //TODO 이 코드의 문제점 = 공백이면, ㅈ됨 앞에도 공백이 있으면 ㅈ됨
        let last = originText!.indexOf(text_last);

        setStart(start);
        setEnd(last);

        setSelectedText(selected_text!);

        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const x = rect.left + window.pageXOffset;
            const y = rect.top + window.pageYOffset;

            setMenuPosition({x, y});
            setSelectedIndex(index);
        }
    };

    return (
        <div className="flex h-fit items-center space-x-1" onMouseEnter={() => {
            setHovered(true)
        }}
             onMouseLeave={() => {
                 setHovered(false)
             }}
        >
            <div>

                {selectedText && (
                    <TextMenu position={{x: menuPosition.x, y: menuPosition.y}} selectedIndex={index}
                              selectedText={selectedText}
                              text={selectedText} url={url} start={start} end={end}/>
                )}
                {
                    block?.content.map((content: IContent, index) => {
                        return (
                            <TextBlock words={content.words} key={index} ref={ref}/>
                        )
                    })
                }
                {/*{*/}
                {/*    block.type === "Text" && <TextBlock style={block.con} text={block.value} key={1}/> ||*/}
                {/*    block.type === "Table" && <TableBlock rows={[]}/>*/}
                {/*}*/}
            </div>
        </div>
    )
}
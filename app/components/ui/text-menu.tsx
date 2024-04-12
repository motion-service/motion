"use client"
import {ToggleGroup, ToggleGroupItem} from "@/app/components/ui/toggle-group";
import {Bold, Italic, Strikethrough, Underline} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu";
import {ScrollAreaDemo} from "@/app/components/ui/color-menu";
import {SaveBlocks} from "@/app/lib/block/block";

interface TextMenuProp {
    position: Position;
    selectedText: string;
    selectedIndex?: number;
    url: string;
    text: string;
    contents: IContent[];
    start?: number;
    end?: number;
}

export const TextMenu = ({position, text, url, selectedText, selectedIndex, contents, start, end}: TextMenuProp) => {

    return (
        <div
            className="flex h-fit items-center absolute top-[calc(50%-2rem)] left-[calc(50%-4rem)] p-2 bg-[#252525] border border-gray-300 shadow-lg rounded"
            style={{top: `${position.y - 60}px`, left: `${position.x}px`}}>
            <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold"
                                 onClick={event => {
                                     SaveBlocks(url, text, true, "Bold", selectedIndex, start, end).then()
                                 }}>
                    <Bold className="h-4 w-4"/>
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic"
                                 onClick={event => {
                                     SaveBlocks(url, text, true, "Italic", selectedIndex, start, end).then()
                                 }}>
                    <Italic className="h-4 w-4"/>
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline"
                                 onClick={event => {
                                     SaveBlocks(url, text, true, "Underline", selectedIndex, start, end).then()
                                 }}>
                    <Underline className="h-4 w-4"/>
                </ToggleGroupItem>
                <ToggleGroupItem value="strike" aria-label="Toggle underline"
                                 onClick={event => {
                                     SaveBlocks(url, text, true, "Strike", selectedIndex, start, end).then()
                                 }}>
                    <Strikethrough className="h-4 w-4"/>
                </ToggleGroupItem>
            </ToggleGroup>
            <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <ScrollAreaDemo text={text} url={url}/>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
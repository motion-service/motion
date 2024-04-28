"use client"
import React, {useEffect, useState} from "react";
import {Button} from "@/app/components/ui/button";
import {Profile} from "@/app/components/profile";
import {IoIosMore} from "react-icons/io";
import {Content} from "@/app/components/ui/content";
import EmojiPicker from "emoji-picker-react";
import {MdInsertEmoticon, MdOutlineComment} from "react-icons/md";
import {CiImageOn} from "react-icons/ci";
import {BiCommentDetail} from "react-icons/bi";


export const Editor: React.FC = () => {
    // const {data, error} = useQuery(['pages', uuid], async () => await LoadPages(uuid));
    let [isIcon, setIcon] = useState<boolean>();
    let [isCovered, setCovered] = useState<boolean>();
    let [selectedEmoji, setSelectedEmoji] = useState<string>();

    return (
        <>
            <main className="flex-1 flex-col h-screen overflow-y-auto overflow-x-hidden">
                <header className="flex items-center text-center w-full h-[48px] bg-[#191919] px-5">
                    <div className="flex w-full justify-between">

                        <div>
                            asdf
                        </div>
                        <div>
                            <Button variant={"ghost"} className="">
                                <IoIosMore/>
                            </Button>
                        </div>
                    </div>
                </header>

                <div
                    className="grid grid-cols-[100px_minmax(600px,_1fr)_100px] grid-rows-subgrid w-full overflow-hidden">
                    <div>
                    </div>

                    <div className="font-bold text-4xl mt-10">
                        {isIcon && <div className="absolute">
                            <EmojiPicker onEmojiClick={emoji => {
                                console.log(emoji)
                            }}/>

                        </div>}
                        <div className="flex min-h-10 group">
                            {!isIcon &&
                                <Button variant="ghost"
                                        className="opacity-0 flex space-x-2 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                                        onClick={event => {
                                            setIcon(true)
                                        }}>
                                    <MdInsertEmoticon size={20}/>
                                    <span>Add icon</span>
                                </Button>
                            }



                            <Button variant="ghost"
                                    className="opacity-0 flex space-x-2 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">

                                <BiCommentDetail size={20}/>
                                <span>Add Comment</span>
                            </Button>
                        </div>
                        <div className="focus:outline-none break-words"
                             contentEditable={true}
                             suppressContentEditableWarning={true}
                             suppressHydrationWarning={true}
                             data-placeholder={"Untitled"}
                        >
                        </div>
                    </div>

                    <div className="">

                    </div>

                    <div className="row-start-2 col-start-1">
                        {/*{*/}
                        {/*    position && (*/}
                        {/*        <div className="group">*/}
                        <Profile/>
                        {/*<CgMenuGridR className="absolute duration-100"*/}
                        {/*             style={{top: `${position.y + 2.5}px`, left: `${position.x - 20}px`}}/>*/}
                        {/*<FaPlus className="absolute duration-100"*/}
                        {/*        style={{top: `${position.y + 2.5}px`, left: `${position.x - 40}px`}}/>*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*}*/}
                    </div>

                    <Content/>
                </div>
            </main>
        </>
    );
};

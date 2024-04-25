"use client"
import React, {useCallback, useContext, useEffect} from "react";
import {Button} from "@/app/components/ui/button";
import {InputTest} from "@/app/components/props/input-test";
import {Profile} from "@/app/components/profile";
import {IoIosMore} from "react-icons/io";
import {Content} from "@/app/components/ui/content";
import {SocketContext} from "@/app/context/SocketProvider";

interface EditorProp {
    owner: string;
    uuid: string;
}

export const Editor: React.FC<EditorProp> = ({uuid, owner}: EditorProp) => {
    // const {data, error} = useQuery(['pages', uuid], async () => await LoadPages(uuid));
    let socket = useContext(SocketContext);

    useEffect(() => {
        socket.emit("join", uuid);
        socket.emit("load_data", uuid);
        socket.on("retrieve_blocks", function (test) {
            console.log(test)
        })
    }, []);
    return (
        <>
            <main className="flex-1 flex-col h-screen overflow-y-auto">
                <header className="flex items-center w-full h-[48px] bg-[#191919] px-5">
                    <div className="flex w-full justify-between">

                    <span>
                    Untitled
                    </span>
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
                        <div className="min-h-10 flex group">
                            <Button variant="ghost"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                Add icon
                            </Button>
                            <Button variant="ghost"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                Add Covered
                            </Button>
                            <Button variant="ghost"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                Add Comment
                            </Button>
                        </div>
                        <div className="focus:outline-none"
                             contentEditable={true}
                             suppressContentEditableWarning={true}
                             suppressHydrationWarning={true}>
                            Untitled
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
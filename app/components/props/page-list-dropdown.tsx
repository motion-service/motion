import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu";
import React from "react";
import {Button} from "@/app/components/ui/button";
import {IoIosLink, IoIosMore, IoIosStarOutline} from "react-icons/io";
import {PageListItemDropdown} from "@/app/components/props/page-list-item-dropdown";
import {MdContentCopy} from "react-icons/md";
import {FaRegEdit} from "react-icons/fa";
import {TiExportOutline} from "react-icons/ti";
import {RiDeleteBin6Line} from "react-icons/ri";

export function PageListDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost"><IoIosMore/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">

                <DropdownMenuGroup>
                    <PageListItemDropdown name={"Add to Favorites"}>
                        <IoIosStarOutline size={18}/>
                    </PageListItemDropdown>

                    <DropdownMenuSeparator/>

                    <PageListItemDropdown name={"Copy link"}>
                        <IoIosLink size={18}/>
                    </PageListItemDropdown>
                    <PageListItemDropdown name={"Duplicate"} shortcut={"Ctrl+D"}>
                        <MdContentCopy size={18}/>
                    </PageListItemDropdown>

                    <PageListItemDropdown name={"Rename"} shortcut={"Ctrl+Shift+R"}>
                        <FaRegEdit size={18}/>
                    </PageListItemDropdown>


                    <PageListItemDropdown name={"Move to"} shortcut={"Ctrl+Shift+P"}>
                        <TiExportOutline size={18}/>
                    </PageListItemDropdown>



                    <PageListItemDropdown name={"Delete"}>
                        <RiDeleteBin6Line size={18}/>
                    </PageListItemDropdown>


                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
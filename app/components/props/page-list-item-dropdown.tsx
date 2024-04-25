import * as React from "react";
import {DropdownMenuItem, DropdownMenuShortcut} from "@/app/components/ui/dropdown-menu";
import {IoIosLink} from "react-icons/io";

interface PageListItemDropdownProp {
    children: React.ReactNode;
    name: string;
    shortcut?: string;
}

export function PageListItemDropdown({children, name, shortcut}: PageListItemDropdownProp) {
    return (
        <DropdownMenuItem>
            <div className="flex items-center space-x-2">
                {children}

                <span>
                {
                    name
                }
                </span>

            </div>
            <DropdownMenuShortcut>
                {
                    shortcut
                }
            </DropdownMenuShortcut>
        </DropdownMenuItem>
    )
}
import {RiPagesLine} from "react-icons/ri";
import Link from "next/link";
import {MdContactPage} from "react-icons/md";


interface PageListItemProp {
    metadata: Metadata;
}

export const PageListItem = ({metadata}: PageListItemProp) => {

    return (
        <div className="flex items-center cursor-pointer">
            <div className="mr-2 cursor-pointer">
                <MdContactPage size={32}/>
            </div>
            <Link href={`/${metadata.url}`}>
                <p className="text-[15px]"> {metadata.title}</p>
            </Link>
        </div>
    )
}
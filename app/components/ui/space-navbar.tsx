"use client"
import {IoMdArrowRoundBack} from "react-icons/io";
import {Button} from "@/app/components/ui/button";
import {useRouter} from "next/navigation";

interface SpaceNavbarProp {
    uuid: string;
    isEmpty: boolean;
}

export const SpaceNavbar = ({uuid, isEmpty}: SpaceNavbarProp) => {
    const router = useRouter();

    const handleBackButton = () => {
        router.push(`/${uuid}/`)
    }

    const handlePrivateButton = () => {
        router.push(`/${uuid}/space/private`)
    }
    const handlePublicButton = () => {
        router.push(`/${uuid}/space/public`)
    }

    const handleTemplateButton = () => {
        router.push(`/${uuid}/space/template`)
    }

    return (
        <nav className="py-4">
            <div className="container space-x-5 mx-auto flex items-center">
                {
                    !isEmpty &&
                    <Button variant="ghost" onClick={handleBackButton}>
                        <IoMdArrowRoundBack/>
                    </Button>
                }

                <ul className="flex space-x-4 cursor-pointer">
                    <li>
                        <Button variant="ghost" onClick={handlePrivateButton}>
                            개인페이지
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" onClick={handlePublicButton}>
                            공용페이지
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" onClick={handleTemplateButton}>
                            탬플릿
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
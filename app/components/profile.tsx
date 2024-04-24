import Image from "next/image";
import React, {useContext} from "react";
import {ProfileContext} from "@/app/context/ProfileProvider";

export const Profile = () => {
    let profileContext = useContext(ProfileContext);
    let position = profileContext?.position.position;

    return (
        <div className="absolute rounded-full duration-100"
             style={{top: `${position?.y}px`, left: `${position?.x - 35}px`}}>
            <Image
                src={"https://avatars.githubusercontent.com/u/11320397"}
                alt={""}
                width={24}
                height={24}
                className="rounded-full"
            />
        </div>
    )
}
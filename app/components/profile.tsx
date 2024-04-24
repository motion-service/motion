import Image from "next/image";
import React from "react";

interface ProfileProp {
    position: Position;
}

export const Profile = ({position}: ProfileProp) => {

    return (
        <div className="absolute rounded-full duration-100"
             style={{top: `${position.y}px`, left: `${position.x - 50}px`}}>
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
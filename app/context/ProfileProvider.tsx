import React, {useRef, useState} from "react";

export type TProfileContext = {
    position: PositionProp;
    setNewPosition: (position: PositionProp) => void;
    setNewIsHovered: (isHovered: boolean) => void;
    isHovered: boolean | undefined;
}

export const ProfileContext = React.createContext<TProfileContext | null>(null);

const ProfileProvider = ({children}: { children: React.ReactNode }) => {
    const [position, setPosition] = useState<PositionProp>({position: {y: 1, x: 1}});
    const [isHovered, setHovered] = useState<boolean>();
    const setNewPosition = (position: PositionProp) => {
        setPosition(position);
    }

    const setNewIsHovered = (isHovered: boolean) => {
        setHovered(isHovered);
    }

    return (
        <ProfileContext.Provider value={{position, setNewPosition, setNewIsHovered, isHovered}}>
            {
                children
            }
        </ProfileContext.Provider>
    )
}

export default ProfileProvider;
import {useEffect, useState} from "react";
import {useSocket} from "@/app/hook/useSocket";
import {useBlock} from "@/app/hook/useBlock";

export const Block = ({uuid, value}: IBlock) => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [newMessage, setNewMessage] = useState("");
    const {socket} = useSocket(); //TODO 만약, isShared가 true라면, socketIO적용
    const [isEditing, setEditing] = useState<boolean>(false);

    useEffect(() => {
        if (value !== undefined) {
            setCurrentMessage(value);
            setNewMessage(value)
        }
    });

    const addBlock = () => {
        fetch("http://localhost:8090/editor/block/create", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uuid)
        }).then((res) => {
            res.json().then(value => {
                let status = value.status;

                if (status === undefined) {
                    let result = value.value;

                }
            })
        })
    }

    const removeBlock = () => {
        fetch("http://localhost:8090/editor/block/delete", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uuid)
        }).then((res) => {
            res.json().then(value => {
                let status = value.status;

                if (status === undefined) {
                    let result = value.value;

                }
            })
        })
    }
    //TODO create update_page method

    //TODO 다른 사람이 수정 중이면, 수정 못하게 해야함.
    return (
        <div contentEditable={true}
             className="text-white text-3xl font-bold text-gray-700 outline-none cursor-text transition-all duration-300"
             aria-placeholder='제목 없음'
             suppressContentEditableWarning={true}
             onInput={(event) => {
                 let innerText = event.currentTarget.innerText;
                 setCurrentMessage(innerText)
             }}

             onKeyDown={(event) => {
                 if (event.key == "Enter") {
                     event.preventDefault();

                 }
             }}>
            {
                newMessage
            }
        </div>
    )
}
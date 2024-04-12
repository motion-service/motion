"use client"
import {useEffect, useState} from "react";

interface InputTextProp {
    url: string;
    title: string | undefined;
    onEnter: () => void;
    onDelete: () => void;
}

export const InputTitle = ({url, title, onEnter}: InputTextProp) => {
    const [prevMessage, setPrevMessage] = useState<string>();
    const [currentMessage, setCurrentMessage] = useState('');
    const [newMessage, setNewMessage] = useState("");
    const [isEditing, setEditing] = useState<boolean>(false);
    const [isSelected, setSelected] = useState<boolean>();
    const [isTyping, setIsTyping] = useState(false);

    let typingTimer: ReturnType<typeof setTimeout>;

    useEffect(() => {
        // const activeSelection = document.getSelection();
        // let selectedText = activeSelection?.toString();
        // console.log(selectedText)
    }, []);

    useEffect(() => {
        if (title !== undefined) {
            setCurrentMessage(title);
            setNewMessage(title)
        }
    });

    //TODO create update_page method
    // useEffect(() => {
    //     // socket.emit('message', currentMessage as string)
    //     let lastIdx = currentMessage.lastIndexOf("$")

    //TODO 다른 사람이 수정 중이면, 수정 못하게 해야함.
    return (
        <div contentEditable={true}
             className="text-white text-3xl font-bold text-gray-700 outline-none cursor-text transition-all duration-300"
             aria-placeholder='제목 없음'
             suppressContentEditableWarning={true}

             onInput={(event) => {
                 clearTimeout(typingTimer);
                 setIsTyping(true);

                 let text = event.currentTarget.innerText;

                 typingTimer = setTimeout(() => {
                     setIsTyping(false);

                     {
                         fetch(`http://localhost:8090/client/page/edit/${url}/${text}/`, {
                             method: 'POST',
                         }).then();

                         return;
                     }
                 }, 3000);

                 document.title = text;
             }}

             onFocus={(event) => {
                 let innerText = event.currentTarget.innerText;
                 setPrevMessage(innerText);
                 console.log(innerText)
             }}

             onKeyDown={(event) => {
                 switch (event.key) {
                     case "Enter":

                         break;
                 }
                 if (event.key == "Enter") {
                     event.preventDefault();
                     onEnter();
                 }

             }}

             onBlur={() => {
                 console.log("불러됨")
             }}

             onMouseUp={event => {
                 console.log("mouse up")

                 setSelected(true);
             }}

             onMouseDown={event => {
                 setSelected(false);

                 console.log("mouse down")
             }}>
            {
                newMessage
            }
        </div>
    )
}
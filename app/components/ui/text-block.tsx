import React, {useEffect, useState} from "react";

interface TextProp {
    contents: IContent[];
}

export const TextBlock: React.FC<TextProp> = ({contents}) => {
    const [text, setText] = useState<string>("");

    useEffect(() => {
        let combinedText = "";
        setText(combinedText);
    }, []);

    //TODO https://stackoverflow.com/questions/74976679/tailwind-combine-2-styles-for-text-decoration-line

    return (
        <>
            {
                contents.map((content, index) => {
                    const styles =
                        `${content.styles.bold ? 'font-bold ' : ''}` +
                        `${content.styles.italic ? 'italic ' : ''}` +
                        `${content.styles.strike ? 'line-through ' : ''}` +
                        `${content.styles.underline ? 'underline ' : ''}` +
                        `${content.styles.underline && content.styles.strike ? '[text-decoration:underline_line-through]' : ''}`

                    return (
                        <span key={index} className={styles}>
                            {content.text.length === 0 ? " " : content.text}
                        </span>
                    )
                })
            }
        </>
    );
};

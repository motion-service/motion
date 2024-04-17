import {useEffect, useState} from "react";

const generate_range = (start: number, end: number) => Array.from({length: (end - start)}, (v, k) => k + start);

interface TextBlock {
    words: IWord;
}

export const useTextBlock = ({words}: TextBlock) => {
    const [results, setResults] = useState<IResult[]>([]);
    useEffect(() => {
        let text = words.text;
        let newResults: IResult[] = [];

        if (words.style.length !== 0) {
            let first_style = words.style[0];
            let start = first_style.range?.start;

            if (start !== 0 && start !== undefined) {
                let result = "";
                let result_range = generate_range(0, start);

                result_range.map(value => {
                    let word = text.charAt(value);
                    result += word;
                });

                newResults.push({
                    text: result
                });

                setResults(newResults)
            }

            words.style.forEach(style => {
                let style_range = style.range;

                let start = style_range?.start;
                let end = style_range?.end;

                if (start !== undefined && end !== undefined) {
                    let result_index = generate_range(start, end);
                    let result_text: string = "";

                    result_index.forEach(index => {
                        let test = text.charAt(index);
                        result_text += test;
                    });

                    newResults.push({
                        text: result_text,
                        style: style
                    });

                    setResults(newResults)
                }
            });

            let last_style = words.style[words.style.length - 1];
            let end = last_style.range?.end;

            if (end !== undefined) {
                if (end !== words.text.length) {
                    let length = words.text.length;

                    let result_range = generate_range(end, length);
                    let result = "";

                    result_range.map(value => {
                        let word = text.charAt(value);
                        result += word;
                    })

                    newResults.push({
                        text: result
                    });

                    setResults(newResults)
                }
            }
        } else {
            newResults.push({
                text: ''
            });

            setResults(newResults)
        }
    }, []);

    return {results}
}
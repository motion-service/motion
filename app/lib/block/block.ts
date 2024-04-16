import axios from "axios";

export async function SaveBlocks(url: string, text: string, status: boolean, type: TextDecoration, selectedIndex?: number, start?: number, end?: number) {
    await fetch(`http://localhost:8090/editor/block/style/edit/${url}/${1}/${start}/${end}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            "block_type": type,
            "text": text,
            "styles": {
                "bold": type === "Bold",
                "italic": type === "Italic",
                "underline": type === "Underline",
                "strike": type === "Strike",
            },
            "children": []
        }),
    });
}

export async function LoadAllBlock(uuid: string) {
    let blocks: IBlock[] = [];
    let contents: IContent[] = [];

    axios.post(`http://localhost:8090/editor/block/load/${uuid}`).then(value => {
        let data = value.data;

        data.map((element: any) => {
            let content = element.content;
            contents.push(content)
        });

        let block: IBlock = {
            pageId: uuid,
            content: contents,
            isEditing: false
        };

        blocks.push(block);
    });

    return blocks;
}

/**
 * Send request for create new block
 * @param uuid page id
 * @constructor
 */
export async function CreateBlock(uuid: string) {
    await fetch(`http://localhost:8090/editor/block/create/${uuid}`, {
        method: 'POST',
    });
}
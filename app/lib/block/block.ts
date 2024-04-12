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
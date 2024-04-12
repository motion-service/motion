export async function DeletePage() {

}

export async function LoadPages(userUuid: string) {

    try {
        const res = await fetch(`http://localhost:8090/client/page/load/all/${userUuid}`, {
            method: 'POST'
        });

        const value = await res.json();

        const newPages: Page[] = value.map((element: any) => {
            let page: Page;
            let blocks: IBlock[] = [];

            element.blocks.map((block: any) => {
                let contents: IContent[] = [];

                block.content.map((content: any) => {
                    const blockType = content.blockType;
                    const styles = content.styles;
                    const text = content.text;

                    let new_content: IContent = {
                        blockType: blockType,
                        text: text,
                        styles: styles
                    }

                    contents.push(new_content);
                });

                let new_block: IBlock = {
                    content: contents,
                    value: "",
                    type: "Text"
                }

                blocks.push(new_block)
            });

            const newMetadata: Metadata = {
                url: element._id.$oid,
                title: element.metadata.title
            };

            page = {
                owner: element.owner,
                metadata: newMetadata,
                blocks: blocks,
                guest: [],
                members: [],
                isShared: false,
                created_date: ""
            };

            return page;
        });

        return newPages;
    } catch (error) {
        throw error;
    }
}
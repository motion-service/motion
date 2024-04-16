export async function DeletePage() {

}

export async function LoadPages(userUuid: string) {
    try {
        const res = await fetch(`http://localhost:8090/client/page/load/all/${userUuid}`, {
            method: 'POST'
        });

        const value = await res.json();

        let pages: Page[] = [];

        value.map((element: any) => {
            let element_metadata = element.metadata;
            let title = element_metadata.title;
            let url = element._id.$oid;

            let metadata: Metadata = {
                url: url,
                title: title
            }

            let page: Page = {
                owner: userUuid,
                metadata: metadata,
                blocks: [],
                members: [],
                guest: [],
                isShared: false,
                created_date: ""
            }

            pages.push(page);

        });
        return pages;
    } catch (error) {
        throw error;
    }
}
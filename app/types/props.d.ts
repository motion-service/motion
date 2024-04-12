interface Page {
    owner: string;
    isShared: boolean;
    metadata: Metadata;
    members: User[];
    blocks: IBlock[];
    guest: User[];
    created_date: striing;
}

interface Metadata {
    url: string;
    title: string;
}

interface ClientProp {
    uuid: string;
}

interface IBlock {
    value: string;
    type: "Default" | "Table" | "Text";
    content: IContent[];
}

interface IContent {
    blockType: "Text" | "Paragraph" | "Table";
    text: string;
    styles: IStyles;
}

type TextDecoration = "Bold" | "Italic" | "Underline" | "Strike"

interface IStyles {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strike: boolean;
    backgroundColor: any;
    textAlignment: any;
}

interface Row {
    cells: Cell[];
}

interface Cell {
    block: IBlock;
}

interface Position {
    x: number;
    y: number;
}
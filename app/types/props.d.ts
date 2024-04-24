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
    pageId: string,
    content: IContent[]
    isEditing: boolean
}

interface IRange {
    start: number;
    end: number;
}

interface IWord {
    text: string;
    style: IStyle[];
}

interface IContent {
    blockType: "Text" | "Paragraph" | "Table";
    words: IWord;
}

interface IResult {
    text: string;
    style?: IStyle;
}

type TextDecoration = "Bold" | "Italic" | "Underline" | "Strike"

interface IStyle {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strike?: boolean;
    backgroundColor?: any;
    textAlignment?: any;
    range?: IRange;
}

interface Position {
    x: number;
    y: number;
}

interface PositionProp {
    position: Position;
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
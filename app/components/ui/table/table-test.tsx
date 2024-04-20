import React, {useState, useCallback, useEffect, useRef} from "react";
import "./style.css";

interface Column {
    text: string;
    ref: React.RefObject<HTMLTableHeaderCellElement>;
}

interface TableProps {
    headers: string[];
    minCellWidth: number;
}

const createHeaders = (headers: string[]): Column[] => {
    return headers.map((item) => ({
        text: item,
        ref: useRef<HTMLTableHeaderCellElement>(null)
    }));
};

const TableTest: React.FC<TableProps> = ({headers, minCellWidth}) => {
    const [tableHeight, setTableHeight] = useState<number | "auto">("auto");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const tableElement = useRef<HTMLTableElement>(null);
    const columns = createHeaders(headers);

    useEffect(() => {
        if (tableElement.current) {
            setTableHeight(tableElement.current.offsetHeight);
        }
    }, []);

    const mouseDown = useCallback(
        (index: number) => {
            setActiveIndex(index);
        },
        []
    );

    const mouseMove = useCallback(
        (e: MouseEvent) => {
            if (activeIndex !== null && tableElement.current) {
                const gridColumns = columns.map((col, i) => {
                    if (i === activeIndex && col.ref.current) {
                        const width = e.clientX - col.ref.current.offsetLeft;
                        console.log(width)
                        if (width >= minCellWidth) {
                            return `${width}px`;
                        }
                    }
                    return `${col.ref.current?.offsetWidth}px`;
                });

                tableElement.current.style.gridTemplateColumns = `${gridColumns.join(" ")}`;
            }
        },
        [activeIndex, columns, minCellWidth]
    );

    const removeListeners = useCallback(() => {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseup", removeListeners);
    }, [mouseMove]);

    const mouseUp = useCallback(() => {
        setActiveIndex(null);
        removeListeners();
    }, [removeListeners]);

    useEffect(() => {
        if (activeIndex !== null) {
            window.addEventListener("mousemove", mouseMove);
            window.addEventListener("mouseup", mouseUp);
        }

        return () => {
            removeListeners();
        };
    }, [activeIndex, mouseMove, mouseUp, removeListeners]);

    const resetTableCells = () => {
        if (tableElement.current) {
            tableElement.current.style.gridTemplateColumns = "";
        }
    };

    return (
        <div className="container">
            <div className="table-wrapper">
                <table className="resizeable-table" ref={tableElement}>
                    <thead>
                    <tr>
                        {columns.map(({ref, text}, i) => (
                            <th key={text} ref={ref}>
                                <span>{text}</span>
                                <div
                                    style={{height: tableHeight}}
                                    onMouseDown={() => mouseDown(i)}
                                    className={`resize-handle ${
                                        activeIndex === i ? "active" : "idle"
                                    }`}
                                />
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <span>Large Detroit Style Pizza</span>
                        </td>
                        <td>
                            <span>3213456785</span>
                        </td>
                        <td>
                            <span>$31.43</span>
                        </td>
                        <td>
                            <span>Pending</span>
                        </td>
                        <td>
                            <span>Dave</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <span>
                            Double Decker Club With Fries. Pickles, extra side avacado
                          </span>
                        </td>
                        <td>
                            <span>9874563245</span>
                        </td>
                        <td>
                            <span>$12.99</span>
                        </td>
                        <td>
                            <span>Delivered</span>
                        </td>
                        <td>
                            <span>Cathy</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Family Sized Lobster Dinner</span>
                        </td>
                        <td>
                            <span>3456781234</span>
                        </td>
                        <td>
                            <span>$320.00</span>
                        </td>
                        <td>
                            <span>In Progress</span>
                        </td>
                        <td>
                            <span>Alexander</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={resetTableCells}>Reset</button>
        </div>
    );
};

export default TableTest;

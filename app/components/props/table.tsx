"use client"


interface TableProp {
    tableData: string[][];
}

export const Table = ({tableData}: TableProp) => {
    return (
        <table>
            <tbody>
            {
                tableData.map((cells, key) => {
                    return (
                        <tr key={key}>
                            {
                                cells.map((cell, key) => {
                                    return (
                                        <td key={key}>
                                            {
                                                cell
                                            }
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
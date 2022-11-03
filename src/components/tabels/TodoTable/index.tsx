import { Table, Button } from "rsuite";
import React from "react";

export default function TodoTable({ data, onDelete }) {
    return (
        <Table
            height={420}
            data={data}
            bordered
            cellBordered
            onSortColumn={(sortColumn, sortType) => {
                console.log(sortColumn, sortType);
            }}
        >
            <Table.Column width={250} align="left">
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.Cell dataKey="id" />
            </Table.Column>
            <Table.Column flexGrow={1}>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.Cell dataKey="title" />
            </Table.Column>
            <Table.Column flexGrow={2}>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.Cell dataKey="description" />
            </Table.Column>
            <Table.Column width={90} align={"left"}>
                <Table.HeaderCell>Remove</Table.HeaderCell>
                <Table.Cell>
                    {rowData => (
                        <Button size={"xs"} onClick={() => onDelete({ id: rowData.id })}>
                            Remove
                        </Button>
                    )}
                </Table.Cell>
            </Table.Column>
        </Table>
    );
}

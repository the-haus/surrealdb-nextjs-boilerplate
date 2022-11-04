import { Panel, Stack, Button } from "rsuite";
import TodoTable from "components/tabels/TodoTable";
import {
    useCreateTodoOperationMutation,
    useRemoveTodoOperationMutation,
    useQueryTodoOperationQuery,
    QueryTodoOperationDocument
} from "hooks/fragments";
import React, { useState } from "react";
import useNotification from "hooks/useNotification";
import TodoModal from "components/modals/TodoModal";
import { CreateTodoOperationMutationVariables, RemoveTodoOperationMutationVariables } from "types/schema";

export default function TodoPanel() {
    const [open, setOpen] = useState(false);

    const [push] = useNotification();

    const { data } = useQueryTodoOperationQuery();
    const [createTodoMutation] = useCreateTodoOperationMutation();
    const [removeTodoMutation] = useRemoveTodoOperationMutation();

    const onSubmit = async (data: CreateTodoOperationMutationVariables) => {
        try {
            await createTodoMutation({
                variables: {
                    title: data.title,
                    description: data.description
                },
                refetchQueries: [QueryTodoOperationDocument]
            });
            push("success", `Added ${data.title}`);
            setOpen(false);
        } catch (e) {
            console.log(e);
        }
    };

    const onDelete = async ({ id }: RemoveTodoOperationMutationVariables) => {
        try {
            await removeTodoMutation({
                variables: {
                    id: id
                },
                refetchQueries: [QueryTodoOperationDocument]
            });
            push("success", `Removed ${id}`);
        } catch (e) {
            console.log(id);
        }
    };

    return (
        <Panel
            header={
                <Stack spacing={6} justifyContent={"space-between"}>
                    <h3>Todo</h3>
                    <Button onClick={() => setOpen(true)} appearance={"primary"} size="md">
                        Add Todo
                    </Button>
                </Stack>
            }
            bordered
        >
            <TodoModal
                open={open}
                onSubmit={onSubmit}
                handleClose={() => {
                    setOpen(false);
                }}
            />
            <TodoTable data={data?.queryTodo || []} onDelete={onDelete} />
        </Panel>
    );
}

import { Grid } from "rsuite";
import TodoPanel from "components/panels/TodoPanel";

export default function TodoSection() {
    return (
        <Grid className={"todo-container"}>
            <TodoPanel />
        </Grid>
    );
}

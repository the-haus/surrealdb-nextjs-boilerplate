import { Notification, useToaster } from "rsuite";
import React from "react";
import { MessageType } from "rsuite/esm/Notification/Notification";

function useNotification() {
    const toaster = useToaster();

    const push = (
        type: MessageType,
        content:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
    ) => {
        toaster.push(
            <Notification type={"success"} closable>
                {content}
            </Notification>,
            { placement: "topEnd" }
        );
    };

    return [push];
}

export default useNotification;

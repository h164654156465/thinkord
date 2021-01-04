/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useContext } from "react";
import { ControlContext } from "../../context/controlContext";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { fade, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    block: {
        paddingBottom: theme.spacing(4),
        margin: theme.spacing(0, 1, 1, 1),
    },
    input: {
        margin: theme.spacing(1),
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    },
    btnConfirm: {
        background: "#5AAC44",
        color: "#fff",
        "&:hover": {
            background: fade("#5AAC44", 0.75),
        },
    },
}));

export default function InputText() {
    const { handleText } = useContext(ControlContext);
    const classes = useStyle();
    const [content, setContent] = useState(null);
    // const { addBlock } = useContext(StoreUpdateContext);

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    const handleBtnConfirm = () => {
        setContent("");
        handleText(content);
    };
    return (
        <div>
            <div>
                <Paper className={classes.block}>
                    <InputBase
                        onChange={handleContentChange}
                        multiline
                        fullWidth
                        inputProps={{ className: classes.input }}
                        value={content || ""}
                        placeholder="Enter the content"
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
                    {"Enter"}
                </Button>
                <IconButton>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    );
}

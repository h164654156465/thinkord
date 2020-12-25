/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext } from "react";
import { Icon } from "@material-ui/core";
//import { BlockTitle } from "../Title";
import { StoreUpdateContext } from "../../../context";
import classes from './Block.module.scss';

export default function Block({ block, index, collectionId }) {
    const { deleteBlock } = useContext(StoreUpdateContext);

    const handleBlockChange = () => {
        deleteBlock(collectionId, index);
    };

    return (
        <div className={classes.Block}>
            <div className={classes.BlockMain}>
                <Icon className={classes.Icon + " fas fa-quote-right"}/>
                <div className={classes.BlockContent}>
                    {/* <BlockTitle title={block.title} collectionId={collectionId} index={index} /> */}
                    <div>{block.content}</div>
                    <div className={classes.BlockTime}>
                        <Icon className={classes.Icon + " fas fa-clock"}></Icon>
                        12/16 13:00
                    </div>
                </div>
            </div>
            <div className={block.BlockControls}>
                <Icon onClick={handleBlockChange} className="fas fa-ellipsis-h"/>
            </div>
        </div>
    );
}
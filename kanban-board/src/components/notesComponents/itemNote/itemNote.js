import React, { useContext } from "react";
import styles from "./itemNote.module.css"
import { Link } from "react-router-dom";
import Context from "../../../context/context";
import {Reorder} from "framer-motion"

export const ItemNote = ({item}) => {
    const dataContext = useContext(Context)

    return (
        <Reorder.Item as="div" value={item}>
            <div className={styles.item_note_wrapper}>
                <Link to="/editNotes">
                    <div onClick={() => dataContext.sendCurrentIdNote(item.id)} className={styles.name_note}>
                        {item.name}
                    </div>
                </Link>
                <div className={styles.other}>
                    <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" onClick={() => {
                        dataContext.deleteNote(item.id)
                    }}/>
                </div>
                <div className={styles.description}>
                    <span>{item.description}</span>
                </div>
            </div>            
        </Reorder.Item>
    )
}
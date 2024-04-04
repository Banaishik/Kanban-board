import React, { useContext, useEffect, useState } from "react";
import { ItemNote } from "../itemNote/itemNote";
import Context from "../../../context/context";
import {Reorder} from "framer-motion"
import styles from "./pageNotes.module.css"

export const PageNotes = () => {
    const dataContext = useContext(Context)

    const [notes, setNotes] = useState(dataContext.state.stateNotes.notes)
    const [updateNotes, setUpdateNotes] = useState(0)

    useEffect(() => {
        if (dataContext.state.stateNotes.notes !== notes) {
            setNotes(dataContext.state.stateNotes.notes)
        }
    }, [dataContext.state.stateNotes])

    useEffect(() => {
        if (notes.length > 0 && updateNotes !== 0) {
            dataContext.changeAllNotes(notes)
        }
    }, [updateNotes])

    return (
        <div className={styles.wrapper_notes} key={updateNotes}>
            <Reorder.Group as="span" axys="y" values={notes} onReorder={(newArray) => {
                setNotes(newArray)
                setTimeout(() => setUpdateNotes(updateNotes +1), 1000)
            }}>
                {
                    notes.map(item => <ItemNote key={item.id} id={item.id} item={item}/>)
                }
            </Reorder.Group>
            <div className={styles.add_note} onClick={() => dataContext.addNote('name', 'description')}>+</div>
        </div>
    )
}
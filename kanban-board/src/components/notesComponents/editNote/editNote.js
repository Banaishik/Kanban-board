import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./editNote.module.css"
import Context from "../../../context/context";

export const EditNote = () => {
    const [note, setNote] = useState({})
    const [sentence, setSentence] = useState([])
    const [check, setCheck] = useState(false)
    const dataContext = useContext(Context)

    const [colorWindow, setColorWindow] = useState({window : true, Y : 0, X : 0})
    const [currentSentence, setCurrentSentence] = useState({})
    const [updateNote, setUpdateNote] = useState(0)

    const markerSentence = (sentence, color) => {
        const index = note.coloredSentence.findIndex(item => item.sentence === sentence.sentence)
        
        if (index === -1) {
            setNote({
                ...note,
                coloredSentence : [...note.coloredSentence, {sentence : sentence.sentence, color : color}]
            })
        } else {
            const updatedColoredSentence = note.coloredSentence.filter((item) => item.sentence !== sentence.sentence);
            setNote({
                ...note,
                coloredSentence : updatedColoredSentence
            })
        }
    }

    const checkSentence = (dataSentebce) => {
        let arraySentece
        let colors

        const index = note.coloredSentence.findIndex(item => item.sentence === dataSentebce.sentence)
        if (note.coloredSentence) {
            arraySentece = note.coloredSentence.filter(item => {
                if (item.sentence === dataSentebce.sentence) {
                    colors = item.color
                } else {
                    return"ничего не найдено простите"
                }
            })            
        }

        if (index === -1) {
            return <span onClick={(e) => {
                openColorWindow(e, dataSentebce)
            }}>{dataSentebce.sentence}</span>
        } else {
            return <span onClick={(e) => {
                openColorWindow(e, dataSentebce)
            }} className={styles[`sentence_${colors}`]}>{dataSentebce.sentence}</span>
        }
    }

    const handleCheck = () => {
        setCheck(!check)
        if (check) {
            dataContext.changeNote(note)
        }
    }

    const handleDescription = (e) => {
        setNote({
            ...note,
            description : e.target.value
        })
    }

    const handleName = (e) => {
        setNote({
            ...note,
            name : e.target.value
        })
    }

    const openColorWindow = (event, sentence) => {
        const x = event.clientX;
        const y = event.clientY;
    
        if (colorWindow.window) {
            setColorWindow({ window: false, Y: y, X: x});
            setCurrentSentence(sentence)
        } else {
            setColorWindow({ window: true,   Y: 0, X: 0});
            setCurrentSentence(sentence)
        }
    }

    const changeColor = (color) => {
        markerSentence(currentSentence, color)
        setUpdateNote(updateNote + 1)
        setColorWindow({ window: false, Y: 0, X: 0 });
    }

    useEffect(() => {
        if (note.description) {
            let myDescription = note.description.split('.').map(item => ({sentence: item.trim(), color: ""})); 
            setSentence(myDescription)
        }
    }, [note.description])

    useEffect(() => {
        const note = dataContext.state.stateNotes.notes.filter(item => item.id === dataContext.state.stateNotes.noteCurrentId)
        setNote(...note)
    }, [dataContext.state.stateNotes.notes, dataContext.state.stateNotes.noteCurrentId])

    useEffect(() => {
        if (!colorWindow.window) {
            dataContext.changeNote(note)
        }
    }, [updateNote])

    return (
        <div className={styles.wrapper_note} >
            <div>
                {
                    check ? (
                        <div className={styles.change_note} onClick={handleCheck}><img src="https://pngicon.ru/file/uploads/zelenaja-galochka.png"/> </div>
                    ) : (
                        <div className={styles.change_note} onClick={handleCheck}><img src="https://cdn-icons-png.flaticon.com/512/2956/2956842.png"/> </div>
                    )
                }                
            </div>

            <div>
                {
                    check ?
                        (
                            <div>
                                <textarea className={styles.editing_name} onChange={(e) => handleName(e)} value={note.name}></textarea>
                                <textarea 
                                    className={styles.editing_description} 
                                    onChange={(e) => handleDescription(e)}
                                    value={note.description}
                                ></textarea>
                            </div>

                        ) :
                        (
                            <div>
                                <div>{note.name}</div>
                                <div>
                                    {sentence.map(item => checkSentence(item))}  
                                </div>
                            </div>
                        )
                }
            </div>

            <div>
                {
                    colorWindow.window ? (
                        null
                    ) : (
                        <div style={{left : colorWindow.X, top : colorWindow.Y}} className={styles.window_marker_color}>
                            <div onClick={() => changeColor("blue")} className={styles.blue}></div>
                            <div onClick={() => changeColor("yellow")} className={styles.yellow}></div>
                            <div onClick={() => changeColor("green")} className={styles.green}></div>
                        </div>
                    )
                }                
            </div>
        </div>
    )
}
import React, { useContext, useRef, useState, useEffect} from 'react';
import Context from '../../../context/context';

import styles from "./modalWindow.module.css"

const ModalWindowLogIn = () => {
    const dataContext = useContext(Context)

    const [topic, setTopic] = useState("topic")
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [etnryNull, setEntryNull] = useState(0)

    const topics = [
        "Web development",
        "Construction",
        "Business",
        "Sport",
        "Studies"
    ]

    const handleTopic = (topic) => {
        setTopic(topic)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const checkInputs = () => {
        if (name === null) {
            setEntryNull(1)
        } else if (description === null) {
            setEntryNull(2)
        } else {
            dataContext.handleOpenWindow()
            dataContext.addTaskPlan(name, description, topic)
            handleTopic('topic')
            setName('')
            setDescription('')
            setEntryNull(0)
        }
    }

    return (
        <div className={dataContext.openCreateWindow ? styles.wrapper_modal : styles.wrapper_close}>
            <div>
                <div className={styles.title}>
                    <span>Add new Task</span>
                    <span className={styles.close_create_modal} onClick={dataContext.handleOpenWindow}>&#10006;</span>
                </div>
                <div className={styles.description}>
                    to create a new task, enter the name of the task and briefly describe it
                </div>
                <span>Name task</span>
                <div>
                    <input value={name} onChange={handleName} className={etnryNull === 1 ? styles.input_error : styles.input_normal} placeholder='name task'/>
                </div>
                <span>Description</span>
                <div>
                    <input value={description} onChange={handleDescription} className={etnryNull === 2 ? styles.input_error : styles.input_normal} placeholder='description'/>
                </div>
                <div>
                    <span>Task topic</span>
                    <ul className={styles.topics_menu}>
                        <li>
                            <a>{topic}</a>
                            <ul>
                                {
                                  topics.map(item => <li><a onClick={() => handleTopic(item)}>{item}</a></li>)
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
                <button className={styles.next} onClick={() => {
                    checkInputs()
                }}>Add Task</button>
            </div>
        </div>
    )
}

export default ModalWindowLogIn
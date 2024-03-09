import React, { useState} from 'react';
import styles from "./modalWindow.module.css"

const ModalWindowLogIn = ({open, handleModal}) => {
    const [check, setChek] = useState(false)
    const [gmail, setGmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [etnryNull, setEntryNull] = useState(0)

    const handleCheck = () => {
        setChek(true)
    }

    const handleGmail = (e) => {
        setGmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const checkInputs = () => {
        if (gmail === null) {
            setEntryNull(1)
        } else if (password === null) {
            setEntryNull(2)
        } else {
            handleCheck()
        }
    }

    return (
        <div className={open ? styles.wrapper_modal : styles.wrapper_close}>
            <div>
                <div className={styles.title}>
                    <span>Add new Task</span>
                    <span className={styles.close_create_modal} onClick={handleModal}>&#10006;</span>
                </div>
                <div className={styles.description}>
                    to create a new task, enter the name of the task and briefly describe it
                </div>
                <span>Name task</span>
                <div>
                    <input onChange={handleGmail} className={etnryNull === 1 ? styles.input_error : styles.input_normal} placeholder='name task'/>
                </div>
                <span>Description</span>
                <div>
                    <input onChange={handlePassword} className={etnryNull === 2 ? styles.input_error : styles.input_normal} placeholder='description'/>
                </div>
                <div>
                    <span>Task topic</span>
                    <ul className={styles.topics_menu}>
                        <li>
                            <a>Topic</a>
                            <ul>
                                <li><a>Web development</a></li>
                                <li><a>Construction</a></li>
                                <li><a>Business</a></li>
                                <li><a>Sport</a></li>
                                <li><a>Studies</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button className={styles.next} onClick={() => {
                    checkInputs()
                    handleModal()
                }}>Add Task</button>
            </div>
        </div>
    )
}

export default ModalWindowLogIn
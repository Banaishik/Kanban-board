import React , {useEffect, useState} from "react"
import Context from "../../context/context.js"
import ModalWindowLogIn from "../modalWindows/windowCreateTask/ModalWindowLogIn"
import Sidebar from "../sidebar/sidebar"
import MainBlock from "../mainBlock/mainBlock"
import {
  actionAddTaskPlan,
  actionAddTaskProcess,
  actionAddTaskDone,
  actionDeleteTaskPlan,
  actionDeleteTaskProcess,
  actionDeleteTaskDone,
  actionKeyRerender,
  actionChangeCurrentId,
  actionChangeTaskPlan,
  actionChangeTaskProcess,
  actionChangeTaskDone,
  actionChangePlan,
  actionChangeProcess,
  actionChangeDone
} from "../../store/actions/actionTask.js"
import { 
  actionAddNote,
  actionDeleteNote,
  actionCurrentIdNote,
  actionChangeNote,
  actionChangeAllNotes
} from "../../store/actions/actionsNote.js"
import store from "../../store/store.js"
import styles from "./App.module.css"

function App() {
  const [modalWindow, setModalWindow] = useState(false)
  const [openCreateWindow, setOpenCreateWindow] = useState(false)
  const [keyRerender, setKeyRerender] = useState(1)

  const state = store.getState()

  const handleModalWindow = () => {
    setModalWindow(!modalWindow)
  }

  const handleOpenWindow = () => {
    setOpenCreateWindow(!openCreateWindow)
  }

  const addTaskPlan = (name, description, topic) => {
    const newTask = {
      id : new Date().getTime(),
      name : name, 
      description : description,
      topic : topic,
      commentsCount : 0,
      comments : {},
      views : 0,
      saves : 0,
      points : [
          {namePoint : "start", checked : false, id : 0},
          {namePoint : "middle", checked : false, id : 1},
          {namePoint : "end", checked : false, id : 2},
      ],
      dates : [
          {time : "19.02.2024", hours : 5},
          {time : "23.02.2024", hours : 6},
          {time : "25.02.2024", hours : 7},
      ]
    }

    store.dispatch(actionAddTaskPlan(newTask))
    setKeyRerender(keyRerender + 1)
  }

  const addTaskProcess = (name, description, topic) => {
    const newTask = {
      id : new Date().getTime(),
      name : name, 
      description : description,
      topic : topic,
      commentsCount : 0,
      comments : {},
      views : 0,
      saves : 0,
      points : [
          {namePoint : "start", checked : false, id : 0},
          {namePoint : "middle", checked : false, id : 1},
          {namePoint : "end", checked : false, id : 2},
      ],
      dates : [
          {time : "19.02.2024", hours : 5},
          {time : "23.02.2024", hours : 6},
          {time : "25.02.2024", hours : 7},
      ]
    }

    store.dispatch(actionAddTaskProcess(newTask))
    setKeyRerender(keyRerender + 1)
  }

  const addTaskDone = (name, description, topic) => {
    const newTask = {
      id : new Date().getTime(),
      name : name, 
      description : description,
      topic : topic,
      commentsCount : 0,
      comments : {},
      views : 0,
      saves : 0,
      points : [
          {namePoint : "start", checked : false, id : 0},
          {namePoint : "middle", checked : false, id : 1},
          {namePoint : "end", checked : false, id : 2},
      ],
      dates : [
          {time : "19.02.2024", hours : 5},
          {time : "23.02.2024", hours : 6},
          {time : "25.02.2024", hours : 7},
      ]
    }

    store.dispatch(actionAddTaskDone(newTask))
    setKeyRerender(keyRerender + 1)
  }

  const deleteTaskPlan = (id) => {
    store.dispatch(actionDeleteTaskPlan(id))
    setKeyRerender(keyRerender + 1)
  }

  const changeCurrentId = (id) => {
    store.dispatch(actionChangeCurrentId(id))
    setKeyRerender(keyRerender + 1)
  }

  const changeTaskPlan = (task) => {
    store.dispatch(actionChangeTaskPlan(task))
    setKeyRerender(keyRerender + 1)
  }

  const changeTaskProcess = (task) => {
    store.dispatch(actionChangeTaskProcess(task))
    setKeyRerender(keyRerender + 1)
  }
  
  const changeTaskDone = (task) => {
    store.dispatch(actionChangeTaskDone(task))
    setKeyRerender(keyRerender + 1)
  }

  const deleteNote = (id) => {
    store.dispatch(actionDeleteNote(id))
    setKeyRerender(keyRerender + 1)
  }

  const addNote = (name, description) => {
    const newNote = {
      id : new Date().getTime(),
      name : name,
      description : description,
      coloredSentence : [],
  }

    store.dispatch(actionAddNote(newNote))
    setKeyRerender(keyRerender + 1)
  }

  const sendCurrentIdNote = (id) => {
    store.dispatch(actionCurrentIdNote(id))
    setKeyRerender(keyRerender + 1)
  }

  const changeNote = (note) => {
    store.dispatch(actionChangeNote(note))
    setKeyRerender(keyRerender + 1)
  }

  const changePlan = (array) => {
    store.dispatch(actionChangePlan(array))
    setKeyRerender(keyRerender + 1)
  }

  const changeProcess = (array) => {
    store.dispatch(actionChangeProcess(array))
    setKeyRerender(keyRerender + 1)
  }

  const changeDone = (array) => {
    store.dispatch(actionChangeDone(array))
    setKeyRerender(keyRerender + 1)
  }

  const changeAllNotes = (array) => {
    store.dispatch(actionChangeAllNotes(array))
    setKeyRerender(keyRerender + 1)
  }

  const value = {
    handleModalWindow,
    handleOpenWindow,
    addTaskPlan,
    deleteTaskPlan,
    changeCurrentId,
    changeTaskPlan,
    changeTaskProcess,
    changeTaskDone,
    deleteNote,
    addNote,
    sendCurrentIdNote,
    changeNote,
    changePlan,
    changeProcess,
    changeDone,
    changeAllNotes,
    modalWindow,
    state,
    openCreateWindow,
    keyRerender
  }

  return (
    <Context.Provider value={value}>
      <div className={styles.App}>
        <Sidebar/>
        <MainBlock changeCurrentId={changeCurrentId}/>
        <ModalWindowLogIn/>
      </div>
    </Context.Provider>
  )
}

export default App;
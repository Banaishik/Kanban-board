import React , {useState} from "react"
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
  actionChangeTaskPlan
} from "../../store/actions/action.js"
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
    store.dispatch(actionAddTaskPlan(name, description, topic))
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

  const value = {
    handleModalWindow,
    handleOpenWindow,
    addTaskPlan,
    deleteTaskPlan,
    changeCurrentId,
    changeTaskPlan,
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

  );
}

export default App;
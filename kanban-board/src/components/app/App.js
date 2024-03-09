import React , {useState} from "react"
import ModalWindowLogIn from "../modalWindows/windowCreateTask/ModalWindowLogIn"
import Sidebar from "../sidebar/sidebar"
import MainBlock from "../mainBlock/mainBlock"

import styles from "./App.module.css"

function App() {
  const [modalWindow, setModalWindow] = useState(false)
  const [openCreateWindow, setOpenCreateWindow] = useState(false)

  const handleModalWindow = () => {
      setModalWindow(!modalWindow)
  }

  const handleOpenWindow = () => {
      setOpenCreateWindow(!openCreateWindow)
  }

  return (
    <div className={styles.App}>
      <Sidebar/>
      <MainBlock handleOpenWindow={handleOpenWindow} modalWindow={modalWindow} handleModalWindow={handleModalWindow}/>
      <ModalWindowLogIn open={openCreateWindow}  handleModal={handleOpenWindow}/>
    </div>
  );
}

export default App;
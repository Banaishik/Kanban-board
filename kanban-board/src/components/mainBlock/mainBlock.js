import React, {useContext} from "react";
import Header from "../header/header";
import PanelMenu from "../panelMenu/panelMenu";
import PageTasks from "../taskComponents/pageTasks/pageTasks.js";
import { PageNotes } from "../notesComponents/pageNotes/pageNotes.js";
import EditTaskWindow from "../taskComponents/editTaskWindow/editTaskWindow.js";
import { EditNote } from "../notesComponents/editNote/editNote.js";
import Context from "../../context/context";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import styles from "./mainBlock.module.css"
import { Provider } from "react-redux";
import store from "../../store/store.js";

const MainBlock = () => {
    const dataContext = useContext(Context)

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={styles.mainBlock} key={dataContext.keyRerender}>
                    <Header/>
                    <PanelMenu/>
                    <Routes>
                        <Route path="/" element={<PageTasks/>}/>
                        <Route path="/tasks" element={<PageTasks/>}/>
                        <Route path="/editTask" element={<EditTaskWindow/>}/>
                        <Route path="/notes" element={<PageNotes/>}/>
                        <Route path="/editNotes" element={<EditNote/>}/>
                    </Routes>
                </div>
            </BrowserRouter>            
        </Provider>

    )
}

export default MainBlock
import React, {useContext, useEffect} from "react";
import Header from "../header/header";
import PanelMenu from "../panelMenu/panelMenu";
import PageTasks from "../pageTasks/pageTasks";
import EditTaskWindow from "../editTaskWindow/editTaskWindow";
import Context from "../../context/context";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import styles from "./mainBlock.module.css"

const MainBlock = () => {
    const dataContext = useContext(Context)

    return (
        <BrowserRouter>
            <div className={styles.mainBlock} key={dataContext.keyRerender}>
                <Header/>
                <PanelMenu/>
                <Routes>
                    <Route path="/" element={<PageTasks/>}/>
                    <Route path="/editTask" element={<EditTaskWindow/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default MainBlock
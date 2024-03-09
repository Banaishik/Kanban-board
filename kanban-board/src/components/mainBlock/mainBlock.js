import React, {useState} from "react";
import ItemTask from "../tasks/itemTask";
import Header from "../header/header";
import PanelMenu from "../panelMenu/panelMenu";

import styles from "./mainBlock.module.css"

const MainBlock = ({handleOpenWindow, modalWindow, handleModalWindow}) => {
    return (
        <div className={styles.mainBlock}>
            <Header/>
            <PanelMenu/>
            <div className={styles.block_content}>
            <div className={styles.plan}>
                <div className={styles.header_column}>
                <div className={styles.status_plan}></div>
                <div className={styles.text_header_column}>
                    <span className={styles.name_column}>ToDo</span>
                    <span className={styles.count_task}>3</span>                
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/64/64576.png" />
                </div>
                <div>
                <button className={styles.add_task} onClick={handleOpenWindow}>+ Add New Task</button>
                </div>
                <ItemTask handleModalWindow={handleModalWindow} modalWindow={modalWindow}/>
            </div>
            <div className={styles.process}>
                <div className={styles.header_column}>
                <div className={styles.status_process}></div>
                <div className={styles.text_header_column}>
                    <span className={styles.name_column}>process</span>
                    <span className={styles.count_task}>3</span>                
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/64/64576.png" />
                </div>
                <div>
                <button className={styles.add_task}>+ Add New Task</button>
                </div>
            </div>
            <div className={styles.done}>
                <div className={styles.header_column}>
                <div className={styles.status_done}></div>
                <div className={styles.text_header_column}>
                    <span className={styles.name_column}>Done</span>
                    <span className={styles.count_task}>3</span>                
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/64/64576.png" />
                </div>
                <div>
                <button className={styles.add_task}>+ Add New Task</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MainBlock
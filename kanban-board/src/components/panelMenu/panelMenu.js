import React from "react";
import styles from "./panelMenu.module.css"

const PanelMenu = () => {
    return (
        <div className={styles.panel_menu}>
            <button className={styles.button_panel}>Tasks</button>
            <button className={styles.button_panel}>Notes</button>
            <button className={styles.button_panel}>Questions</button>
            <button className={styles.button_panel}>Overview</button>
        </div>
    )
}

export default PanelMenu
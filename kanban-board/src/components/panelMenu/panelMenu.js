import React from "react";
import styles from "./panelMenu.module.css"
import { Link } from "react-router-dom";

const PanelMenu = () => {
    return (
        <div className={styles.panel_menu} >
            <Link to="/tasks" className={styles.button_panel}>Tasks</Link>
            <Link to="/notes" className={styles.button_panel}>Notes</Link>
            <Link className={styles.button_panel}>Questions</Link>
            <Link className={styles.button_panel}>Overview</Link>
        </div>
    )
}

export default PanelMenu
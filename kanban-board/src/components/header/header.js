import React from "react";
import styles from "./header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
          <div className={styles.progress}>
            <img src="https://i.pinimg.com/originals/5d/87/46/5d87467b3d651f2cec8f40aeb2fc201c.png"/>
            <div className={styles.wrapper_progress}>
              <span className={styles.text_progress}>Progress</span>
              <div className={styles.progress_wid}>
                <div className={styles.progress_complete}></div>
              </div>
            </div>
            <span className={styles.procent_text}>50% complete</span>
          </div>
        </div>
    )
}

export default Header
import React, { useContext, useEffect, useState } from "react";
import styles from "./header.module.css"
import Context from "../../context/context";

const Header = () => {

  const dataContext = useContext(Context)
  const [complete, setComplete] = useState(0)

  useEffect(() => {
    const { plan, process, done } = dataContext.state.stateTasks
    if (plan && process && done) {
      const allTask = plan.length + process.length + done.length;
      const completePercent = done.length / (allTask / 100);
      setComplete(Math.ceil(completePercent))
  } else {
      console.log("Данные не загружены");
  }
  }, [dataContext.state.stateTasks])

  return (
      <div className={styles.header}>
        <div className={styles.progress}>
          <img src="https://i.pinimg.com/originals/5d/87/46/5d87467b3d651f2cec8f40aeb2fc201c.png"/>
          <div className={styles.wrapper_progress}>
            <span className={styles.text_progress}>Progress</span>
            <div className={styles.progress_wid}>
              <div style={{width : `${complete}%`}} className={styles.progress_complete}></div>
            </div>
          </div>
          <span className={styles.procent_text}>{complete}% complete</span>
        </div>
      </div>
  )
}

export default Header
import React from "react";
import styles from "./itemTask.module.css"

const ItemTask = ({modalWindow, handleModalWindow}) => {
    return (
        <div className={styles.task_content}>
        <div className={styles.header_task}>
          <div className={styles.wrapper_tema}>
            <div className={styles.tema}>UX design</div>
          </div>
          <div className={`${styles.other_function} ${modalWindow ? styles.show : styles.none}`}>
            <div className={styles.button_other}>Delete</div>
            <hr/>
            <div className={styles.button_other}>Edit</div>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/64/64576.png" onClick={handleModalWindow}/>
        </div>
        <div className={styles.name_task}>First design concept</div>
        <div className={styles.details_task}>first design concept design concept design concept design concept</div>
        <div className={styles.task_points}>
          <img src="https://cdn.icon-icons.com/icons2/3868/PNG/512/task_icon_243099.png"/>
          <div className={styles.already_points}>0/4</div>
        </div>
        <div className={styles.footer_task}>
          <div className={styles.wrapper_wrapper_avatar}>
            <div className={styles.wrapper_avatar}>
              <img src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"/>
            </div>
          </div>
          <div className={styles.wrapper_icons_active}>
            <div className={styles.icons_active}>
              <img src="https://cdn2.iconfinder.com/data/icons/medical-healthcare-26/28/Chat-2-512.png"/>
              <span>5</span>
            </div>
            <div className={styles.icons_active}>
              <img src="https://cdn-icons-png.flaticon.com/512/245/245428.png" />
              <span>2</span>
            </div>
            <div className={styles.icons_active}>
              <img src="https://cdn-icons-png.flaticon.com/512/351/351587.png" />
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ItemTask
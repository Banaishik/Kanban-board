import React, { useContext, useEffect, useState } from "react";
import styles from "./itemTask.module.css"
import Context from "../../../context/context";
import { Link } from "react-router-dom";
import { Reorder } from "framer-motion";

const ItemTask = ({points, name, description, topic, idParent, item}) => {
  const dataContext = useContext(Context)

  const [modalWindow, setModalWindow] = useState(false)
  const [startDelete, setStartDelete] = useState(false)
  const [keyRerender, setKeyRerender] = useState(1)
  const [id, setId] = useState(idParent)
  const [readyItems, setReadyItems] = useState(0)

  useEffect(() => {
    setId(idParent)
  }, [idParent])

  useEffect(() => {
    if (startDelete) {
      dataContext.deleteTaskPlan(id)
    }
  }, [startDelete])

  useEffect(() => {
    let countReadyPoint = points.filter(item => item.checked === true).length
    setReadyItems(countReadyPoint)
  })

  const handleDelete = () => {
    setKeyRerender(keyRerender + 1)
    setStartDelete(true)
  }

  const handleChange = (id) => {
    dataContext.changeCurrentId(id)
  }

  return (
    <Reorder.Item as="div" value={item}>
      <div 
          key={keyRerender}
          className={styles.task_content}
        >
        <div className={styles.header_task}>
          <div className={styles.wrapper_tema}>
            <div className={styles.tema}>{topic}</div>
          </div>
          <div className={`${styles.other_function} ${modalWindow ? styles.show : styles.none}`}>
            <div className={styles.button_other} onClick={handleDelete}>Delete</div>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/64/64576.png" onClick={() => setModalWindow(!modalWindow)}/>
        </div>
        <div className={styles.wrapper_name_task} onClick={() => {
                handleChange(id)
              }}>
          <Link to="/editTask" className={styles.name_task}>{name}</Link>
        </div>
        <div className={styles.details_task}>{description}</div>
        <div className={styles.task_points}>
          <img src="https://cdn.icon-icons.com/icons2/3868/PNG/512/task_icon_243099.png"/>
          <div className={styles.already_points}>{readyItems}/{points.length}</div>
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
    </Reorder.Item>

  )
}

export default ItemTask
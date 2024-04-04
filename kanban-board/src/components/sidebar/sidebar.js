import React, { useContext, useEffect, useState } from "react";
import styles from "./sidebar.module.css"
import Context from "../../context/context";

const Sidebar = () => {
    const [hours, setHours] = useState(0)
    const dataContext = useContext(Context)
    const {plan, process, done, keyRerender} = dataContext.state.stateTasks

    useEffect(() => {
        let totalHours = 0
        plan.forEach(item => {
            item.dates.forEach(item => {
                totalHours += item.hours
            })
        })

        process.forEach(item => {
            item.dates.forEach(item => {
                totalHours += item.hours
            })
        })

        done.forEach(item => {
            item.dates.forEach(item => {
                totalHours += item.hours
            })
        })
        setHours(totalHours)
    }, [plan, process, done, keyRerender])

    return (
        <div className={styles.sidebar} key={keyRerender}>
            <div className={styles.buttons_sidebar}>
            <div className={styles.button_sidebar}>
                <img src="https://cdn-icons-png.flaticon.com/512/2098/2098402.png"/>
                <span className={styles.name_button}>TASKS</span>
            </div>
            <div className={styles.button_sidebar}>
                <img src="https://cdn-icons-png.flaticon.com/512/1355/1355663.png"/>
                <span className={styles.name_button}>NOTES</span>
            </div>
            </div>
            <div className={styles.time}>
            <div className={styles.text_time}>Time</div>
            <div className={styles.total_time}>
                <span className={styles.total_hours}>TOTAL HOURS</span>
                <div className={styles.hours}>{hours} hours</div>
                <div className={styles.plus_proc}>
                <img src="https://media.istockphoto.com/id/1075679898/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B0-%D0%B2%D0%B2%D0%B5%D1%80%D1%85-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D1%83%D1%81%D0%BF%D0%B5%D1%85%D0%B0-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D1%84%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D1%8B-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=QUoyktQ4IkmXkLpuTgMzU4zTFJSLYNelz0ljokUGyCE="/>
                <span className={styles.procent}>+ 2.5%</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
import React, { useContext, useEffect, useState } from "react";
import ItemTask from "../tasks/itemTask";
import {Reorder} from "framer-motion"

import styles from "./pageTasks.module.css"
import Context from "../../context/context";

const PageTasks = () => {
    const dataContext = useContext(Context)
    const [plan, setPlan] = useState([])
    const [progress, setProgress] = useState([])
    const [done, setDone] = useState([])

    const sortingTasks = (array) => {
        if (array) {
            array.forEach(item => {
                let count = 0
                let allPoint = item.points.length

                item.points.forEach(item => { 
                    if (item.checked) {
                        count++
                    }
                })

                // if (count === allPoint) {
                //     setDone([...done, item])
                // } else if (count !== allPoint && count !== 0) {
                //     setProgress([...progress, item])
                // } else if (count === 0) {
                //     setPlan([...plan, item])
                // }
                if (count === allPoint) {
                    setDone(done => {
                        const isExist = done.some(existingItem => existingItem.id === item.id);
                        return isExist ? done : [...done, item];
                    });
                } else if (count !== allPoint && count !== 0) {
                    setProgress(progress => {
                        const isExist = progress.some(existingItem => existingItem.id === item.id);
                        return isExist ? progress : [...progress, item];
                    });
                } else if (count === 0) {
                    setPlan(plan => {
                        const isExist = plan.some(existingItem => existingItem.id === item.id);
                        return isExist ? plan : [...plan, item];
                    });
                }
            })
        } else {
            console.log(null);
        }
    }

    useEffect(() => {
        sortingTasks(dataContext.state.plan)
        sortingTasks(dataContext.state.process)
        sortingTasks(dataContext.state.done)
    }, [dataContext.state])

    return (
        <div className={styles.block_content}>
        <div className={styles.plan}>
            <div className={styles.header_column}>
            <div className={styles.status_plan}></div>
            <div className={styles.text_header_column}>
                <span className={styles.name_column}>ToDo</span>
                <span className={styles.count_task}>{dataContext.state.plan.length}</span>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/64/64576.png" />
            </div>
            <div>
            <button className={styles.add_task} onClick={dataContext.handleOpenWindow}>+ Add New Task</button>
            </div>
            <Reorder.Group as="span" axys="y" values={plan} onReorder={setPlan}>
                {
                    plan.map(item => 
                        <ItemTask
                            key={item.id}
                            points={item.points} 
                            idParent={item.id} 
                            topic={item.topic} 
                            name={item.name} 
                            description={item.description}
                            item={item}
                        />)
                }                
            </Reorder.Group>

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
            <Reorder.Group as="span" axys="y" values={progress} onReorder={setProgress}>
                {
                    progress.map(item => <ItemTask key={item.id} points={item.points} idParent={item.id} topic={item.topic} name={item.name} description={item.description} item={item}/>)
                }                
            </Reorder.Group>

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
            <Reorder.Group as="span" axys="y" values={done} onReorder={setDone}>
                {
                    done.map(item => <ItemTask key={item.id} points={item.points} idParent={item.id} topic={item.topic} name={item.name} description={item.description} item={item}/>)
                }
            </Reorder.Group>
        </div>
    </div>
    )
}

export default PageTasks
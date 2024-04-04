import React, { useContext, useEffect, useState } from "react";
import ItemTask from "../tasks/itemTask";
import {Reorder} from "framer-motion"
import Context from "../../../context/context";
import styles from "./pageTasks.module.css"

const PageTasks = () => {
    const dataContext = useContext(Context)

    const [countPlan, setCountPlan] = useState(0)
    const [countProcess, setCountProcess] = useState(0)
    const [countDone, setCountDone] = useState(0)

    const sortingTasks = (array) => {
        if (!array) {
            console.log(null);
            return;
        }
    
        const { plan, process, done } = dataContext.state.stateTasks;
    
        const newStateTasks = {
            plan: [],
            process: [],
            done: []
        };
    
        array.forEach(item => {
            let count = item.points.reduce((acc, point) => acc + (point.checked ? 1 : 0), 0);
    
            if (count === item.points.length) {
                newStateTasks.done.push(item);
            } else if (count !== 0) {
                newStateTasks.process.push(item);
            } else {
                newStateTasks.plan.push(item);
            }
        });

        if (JSON.stringify(plan) !== JSON.stringify(newStateTasks.plan)) {
            dataContext.changePlan([...newStateTasks.plan]);
        }

        if (JSON.stringify(process) !== JSON.stringify(newStateTasks.process)) {
            dataContext.changeProcess([...newStateTasks.process]);
        }
        
        if (JSON.stringify(done) !== JSON.stringify(newStateTasks.done)) {
            dataContext.changeDone([...newStateTasks.done]);
        }
    }
    
    useEffect(() => {
        sortingTasks([...dataContext.state.stateTasks.plan, ...dataContext.state.stateTasks.process, ...dataContext.state.stateTasks.done])
    }, [dataContext.state.stateTasks.plan, dataContext.state.stateTasks.process, dataContext.state.stateTasks.done]);

    useEffect(() => {
        const {plan, process, done} = dataContext.state.stateTasks

        setCountPlan(plan.length)
        setCountProcess(process.length)
        setCountDone(done.length)
    }, [dataContext.state.stateTasks])

    return (
        <div className={styles.block_content} key={dataContext.keyRerender}>
            <div className={styles.plan}>
                <div className={styles.header_column}>
                <div className={styles.status_plan}></div>
                <div className={styles.text_header_column}>
                    <span className={styles.name_column}>Plan</span>
                    <span className={styles.count_task}>{countPlan}</span>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/64/64576.png" />
                </div>
                <div>
                <button className={styles.add_task} onClick={dataContext.handleOpenWindow}>+ Add New Task</button>
                </div>
                <Reorder.Group as="span" axys="y" values={dataContext.state.stateTasks.plan} onReorder={dataContext.changePlan}
                >
                    {
                        dataContext.state.stateTasks.plan.map(item => 
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
                    <span className={styles.name_column}>Process</span>
                    <span className={styles.count_task}>{countProcess}</span>                
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/64/64576.png" />
                </div>
                <div>
                <button className={styles.add_task}>+ Add New Task</button>
                </div>
                <Reorder.Group as="span" axys="y" values={dataContext.state.stateTasks.process} onReorder={dataContext.changeProcess}>
                    {
                        dataContext.state.stateTasks.process.map(item => 
                            <ItemTask 
                                key={item.id} 
                                points={item.points}
                                idParent={item.id}
                                topic={item.topic}
                                name={item.name}
                                description={item.description}
                                item={item}
                            />
                        )
                    }
                </Reorder.Group>

            </div>
            <div className={styles.done}>
                <div className={styles.header_column}>
                <div className={styles.status_done}></div>
                <div className={styles.text_header_column}>
                    <span className={styles.name_column}>Done</span>
                    <span className={styles.count_task}>{countDone}</span>                
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/64/64576.png" />
                </div>
                <div>
                <button className={styles.add_task}>+ Add New Task</button>
                </div>
                <Reorder.Group as="span" axys="y" values={dataContext.state.stateTasks.done} onReorder={dataContext.changeDone}>
                    {
                        dataContext.state.stateTasks.done.map(item => <ItemTask key={item.id} points={item.points} idParent={item.id} topic={item.topic} name={item.name} description={item.description} item={item}/>)
                    }
                </Reorder.Group>
            </div>
        </div>
    )
}

export default PageTasks
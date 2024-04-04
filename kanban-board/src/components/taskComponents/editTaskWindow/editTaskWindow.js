import React, { useContext, useEffect, useState } from "react";
import styles from "./editTaskWindow.module.css"
import Context from "../../../context/context";

const EditTaskWindow = () => {
    const [editing, setEding] = useState(false)
    const [task, setTask] = useState()
    const dataContext = useContext(Context)
    const [locationTask, setLocationTask] = useState('')
    const [updateState, setUpdateState] = useState(0)

    const handleEdit = () => {
        setEding(!editing)
    }

    const handleName = (e) => {
        setTask(prevTask => ({
            ...prevTask,
            name: e.target.value
        }));

        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    const handleDescription = (e) => {
        setTask({
            ...task,
            description : e.target.value
        })

        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    const handleCheckBox = (id) => {
        const alteredPoints = task.points.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    checked : !item.checked
                }
            }

            return item
        })

        setTask(newTask => ({
            ...newTask, 
            points: alteredPoints
        }))
        setUpdateState(updateState +1)
    }

    const handleNamePoint = (id, e) => {
        const alteredPoints = task.points.map(item => {
            if (item.id === id) {
                item.namePoint = e.target.value
            }
            return item;
        });
    
        setTask({
            ...task, 
            points: alteredPoints
        });
    }

    const handleHour = (id, e) => {
        const newArray = task.dates.map(item => {
            if (item.id === id) {
                item.hours = e.target.value
            }

            return item
        })

        setTask({
            ...task,
            dates : newArray
        })
    }

    const deletePoint = (id) => {
        const newPoints = task.points.filter(item => item.id !== id)
        setTask({
            ...task,
            points : newPoints
        })
    }

    const deleteTime = (id) => {
        const newTime = task.dates.filter(item => item.id !== id)
        setTask({
            ...task,
            dates : [...newTime]
        })
    }

    const addPoint = () => {
        const newPoints = [
            ...task.points,
            {
                namePoint : "new point", 
                checked : false, 
                id : new Date().getTime()
            }
        ]

        setTask({
            ...task,
            points : newPoints
        })
        setUpdateState(updateState + 1)
    }

    const addDay = () => {
        const currentDate = new Date()
        const day = currentDate.getDate().toString().padStart(2, '0')
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
        const year = currentDate.getFullYear();

        const formattedDate = `${day}.${month}.${year}`;
        const newListDate = [
            ...task.dates,
            {time : formattedDate, hours : 5, id : new Date().getTime()}
        ]
        setTask({
            ...task,
            dates : newListDate
        })
        setUpdateState(updateState + 1)
    }

    const saveDataTask = () => {
        if (locationTask === 'plan') {
            dataContext.changeTaskPlan(task)
        } else if (locationTask === 'process') {
            dataContext.changeTaskProcess(task)
        } else if (locationTask === 'done') {
            dataContext.changeTaskDone(task)
        }
    }

    useEffect(() => {
        let task = null;
    
        if (dataContext.state.stateTasks.currentEditingTask) {
            const taskId = dataContext.state.stateTasks.currentEditingTask;
    
            const planTask = dataContext.state.stateTasks.plan.find(item => item.id === taskId);
            const processTask = dataContext.state.stateTasks.process.find(item => item.id === taskId);
            const doneTask = dataContext.state.stateTasks.done.find(item => item.id === taskId);
    
            if (planTask) {
                task = planTask;
                setLocationTask('plan')
            } else if (processTask) {
                task = processTask;
                setLocationTask('process')
            } else if (doneTask) {
                task = doneTask;
                setLocationTask('done')
            }
    
            if (task) {
                setTask(task);
            }
        }
    }, [dataContext.state.stateTasks.currentEditingTask, dataContext.state.stateTasks.plan, dataContext.state.stateTasks.process, dataContext.state.stateTasks.done]);

    useEffect(() => {
        if (updateState > 0) {
           saveDataTask()
        }
    }, [updateState])

    return (
        task ? (
            <div className={styles.wrappper_edit_task}>
                <div className="wrapper_name">
                    {
                        editing ? (
                            <input onChange={(e) => handleName(e)} className={styles.editing_name} value={task.name}></input>
                        ) : (
                            <span className={styles.name_task}>{task.name}</span>
                        )
                    }
                    {
                        editing ? (
                            <div 
                                onClick={() => {
                                    handleEdit()
                                    setUpdateState(updateState + 1)
                                }}
                                className={styles.edit_task}
                            >
                                <button>save</button>
                                <img src="https://cdn-icons-png.freepik.com/256/1828/1828843.png" />
                            </div>
                        ) : (
                            <div onClick={handleEdit} className={styles.edit_task}>
                                <button>edit</button>
                                <img src="https://cdn-icons-png.flaticon.com/512/5996/5996831.png" />
                            </div>
                        )
                    }

                </div>
                <div className={styles.description}>
                <div className={styles.wrapper_cell}>
                    <div className={styles.name_cell}>Description</div>
                    
                </div>
                    <div className={styles.wrapper_textarea_description}>
                    {
                        editing ? (
                            <textarea onChange={handleDescription} className={styles.editing_description} value={task.description}></textarea>
                        ) : (
                            <div className={styles.description_text}>{task.description}</div>
                        )
                    }                
                    </div>

                </div>
                <div className={styles.plane}>
                    <div className={styles.wrapper_cell}>
                        <div className={styles.name_cell}>Plane</div>
                        <div className={styles.add_button} onClick={addPoint}>+ new point</div>                        
                    </div>

                    {
                        editing ? (
                            task.points.map(item => {
                                return (
                                    <div className={styles.point}>
                                        <input type="checkbox" onChange={() => handleCheckBox(item.id)} checked={item.checked}></input>
                                        <textarea onChange={(e) => handleNamePoint(item.id , e)}  className={styles.editing_point} value={item.namePoint}></textarea>
                                        <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" onClick={() => deletePoint(item.id)}/>
                                    </div>
                                )
                            })
                        ) : (
                            task.points.map(item => {
                                return (
                                    <div className={styles.point}>
                                        {/* <li>{item.namePoint}</li> */}
                                        <input type="checkbox" onChange={() => handleCheckBox(item.id)} checked={item.checked}></input>
                                        <span>{item.namePoint}</span>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
                <div className={styles.time}>
                <div className={styles.wrapper_cell}>
                    <div  className={styles.name_cell}>Time</div>
                    <div className={styles.add_button}  onClick={addDay}>+ new day</div>                    
                </div>
                    {
                        editing ? (
                            task.dates.map(date => {
                                return (
                                    <div className={styles.time_item}>
                                        <span>{date.time} :<input onChange={(e) => handleHour(date.id, e)} value={date.hours} type="number" id="tentacles" name="tentacles" min="1" max="24"/></span>
                                        <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" onClick={() => deleteTime(date.id)} />
                                    
                                    </div>
                                )
                            })
                        ) : (
                            task.dates.map(date => {
                                return (
                                    <div>
                                        <span>{date.time} : {date.hours} hours</span>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>            
            
        ) : (
            <div>Loading...</div>
        )
    )
}

export default EditTaskWindow
const TYPES_ACTION = {
    add_task_plan : "ADD_TASK_PLAN",
    add_task_process : "ADD_TASK_PROCESS",
    add_task_done : "ADD_TASK_DONE",
    delete_task_plan : "DELETE_TASK_PLAN",
    delete_task_process : "DELETE_TASK_PROCESS",
    delete_task_done : "DELETE_TASK_DONE",
    keyRerender : "RERENDER_PLUS",
    change_editing_task : "CHANGE_CURRENT_ID",
    change_name_task_plan : "CHANGE_TASK_PLAN"
}


const actionAddTaskPlan = (name, description, topic) => {
    return {
        type : TYPES_ACTION.add_task_plan,
        payload : {
            id : new Date().getTime(),
            name : name, 
            description : description,
            topic : topic,
            commentsCount : 0,
            comments : {},
            views : 0,
            saves : 0,
            points : [
                {namePoint : "start", checked : false, id : 0},
                {namePoint : "middle", checked : false, id : 1},
                {namePoint : "end", checked : false, id : 2},
            ],
            dates : [
                {time : "19.02.2024", hours : 5},
                {time : "23.02.2024", hours : 6},
                {time : "25.02.2024", hours : 7},
            ]
        }
    }
}

const actionAddTaskProcess = (name, description, topic) => {
    return {
        type : TYPES_ACTION.add_task_process,
        payload : {
            id : new Date().getTime(),
            name : name, 
            description : description,
            topic : topic,
            commentsCount : 0,
            comments : {},
            views : 0,
            saves : 0,
            points : [
                {namePoint : "start", checked : false, id : 0},
                {namePoint : "middle", checked : false, id : 1},
                {namePoint : "end", checked : false, id : 2},
            ],
            dates : [
                {time : "19.02.2024", hours : 5},
                {time : "23.02.2024", hours : 6},
                {time : "25.02.2024", hours : 7},
            ]
        }
    }
}

const actionAddTaskDone = (name, description, topic) => {
    return {
        type : TYPES_ACTION.add_task_done,
        payload : {
            id : new Date().getTime(),
            name : name, 
            description : description,
            topic : topic,
            commentsCount : 0,
            comments : {},
            views : 0,
            saves : 0,
            points : [
                {namePoint : "start", checked : false, id : 0},
                {namePoint : "middle", checked : false, id : 1},
                {namePoint : "end", checked : false, id : 2},
            ],
            dates : [
                {time : "19.02.2024", hours : 5},
                {time : "23.02.2024", hours : 6},
                {time : "25.02.2024", hours : 7},
            ]
        }
    }
}

const actionDeleteTaskPlan = (id) => {
    return {
        type : TYPES_ACTION.delete_task_plan,
        payload : id
    }
}

const actionDeleteTaskProcess = (id) => {
    return {
        type : TYPES_ACTION.delete_task_process,
        payload : id
    }
}

const actionDeleteTaskDone = (id) => {
    return {
        type : TYPES_ACTION.delete_task_done,
        payload : id
    }
}

const actionKeyRerender = () => {
    return {
        type : TYPES_ACTION.keyRerender
    }
}

const actionChangeCurrentId = (id) => {
    return {
        type : TYPES_ACTION.change_editing_task,
        payload : id
    }
}

const actionChangeTaskPlan = (task) => {
    return {
        type : TYPES_ACTION.change_name_task_plan,
        payload : task
    }
}

export {
    actionAddTaskPlan,
    actionAddTaskProcess,
    actionAddTaskDone,
    actionDeleteTaskPlan,
    actionDeleteTaskProcess,
    actionDeleteTaskDone,
    actionKeyRerender,
    actionChangeCurrentId,
    actionChangeTaskPlan
}
const TYPES_ACTION = {
    add_task_plan : "ADD_TASK_PLAN",
    add_task_process : "ADD_TASK_PROCESS",
    add_task_done : "ADD_TASK_DONE",
    delete_task_plan : "DELETE_TASK_PLAN",
    delete_task_process : "DELETE_TASK_PROCESS",
    delete_task_done : "DELETE_TASK_DONE",
    keyRerender : "RERENDER_PLUS",
    change_editing_task : "CHANGE_CURRENT_ID",
    change_name_task_plan : "CHANGE_TASK_PLAN",
    change_name_task_process : "CHANGE_TASK_PROCESS",
    change_name_task_done : "CHANGE_TASK_DONE",
    change_plan : "CHANGE_PLAN",
    change_process : "CHANGE_PROCESS",
    change_done : "CHANGE_DONE"

}

const actionAddTaskPlan = (newTask) => {
    return {
        type : TYPES_ACTION.add_task_plan,
        payload : newTask
    }
}

const actionAddTaskProcess = (newTask) => {
    return {
        type : TYPES_ACTION.add_task_process,
        payload : newTask
    }
}

const actionAddTaskDone = (newTask) => {
    return {
        type : TYPES_ACTION.add_task_done,
        payload : newTask
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

const actionChangeTaskProcess = (task) => {
    return {
        type : TYPES_ACTION.change_name_task_process,
        payload : task
    }
}

const actionChangeTaskDone = (task) => {
    return {
        type : TYPES_ACTION.change_name_task_done,
        payload : task
    }
}

const actionChangePlan = (array) => {
    return {
        type : TYPES_ACTION.change_plan,
        payload : array
    }
}

const actionChangeProcess = (array) => {
    return {
        type : TYPES_ACTION.change_process,
        payload : array
    }
}

const actionChangeDone = (array) => {
    return {
        type : TYPES_ACTION.change_done,
        payload : array
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
    actionChangeTaskPlan,
    actionChangeTaskProcess,
    actionChangeTaskDone,
    actionChangePlan,
    actionChangeProcess,
    actionChangeDone
}
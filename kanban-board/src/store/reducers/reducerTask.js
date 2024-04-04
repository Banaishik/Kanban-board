const defaultState = {
    plan : [
        {
            id : 567,
            name : "First design concept",
            description : "first design concept design concept design concept design concept",
            topic : "UX design",
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
                {time : "19.02.2024", hours : 5, id : 1},
                {time : "23.02.2024", hours : 6, id : 2},
                {time : "25.02.2024", hours : 7, id : 3},
            ]
        }
    ],
    process : [
    ],
    done : [],
    keyRerender : 1,
    currentEditingTask : null
}


const reducerTask = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TASK_PLAN" : 
            return {
                ...state,
                plan : [...state.plan, action.payload]
            }
        case "ADD_TASK_PROCESS" : 
            return {
                ...state,
                process : [...state.process, action.payload]
            }
        case "ADD_TASK_DONE" : 
            return {
                ...state,
                done : [...state.done, action.payload]
            }
        case "DELETE_TASK_PLAN" :
            return {
                ...state,
                plan : state.plan.filter(item => item.id !== action.payload)
            }
        case "DELETE_TASK_PROCESS" :
            return {
                ...state,
                process : state.process.filter(item => item.id !== action.payload)
            }
        case "DELETE_TASK_DONE" :
            return {
                ...state,
                done : state.done.filter(item => item.id !== action.payload)
            }
        case "RERENDER_PLUS" : 
            return {
                ...state,
                keyRerender : state.keyRerender + 1
            }
        case "CHANGE_CURRENT_ID" : 
            return {
                ...state,
                currentEditingTask : action.payload
            }
        case "CHANGE_TASK_PLAN" :
            return {
                ...state,
                plan : state.plan.map(task => {
                        if (task.id === action.payload.id) {
                            return action.payload
                        } else {
                            return task
                        }
                    }),
            }
        case "CHANGE_TASK_PROCESS" :
            return {
                ...state,
                process : state.process.map(task => {
                        if (task.id === action.payload.id) {
                            return action.payload
                        } else {
                            return task
                        }
                    }),
            }
        case "CHANGE_TASK_DONE" :
            return {
                ...state,
                done : state.done.map(task => {
                        if (task.id === action.payload.id) {
                            return action.payload
                        } else {
                            return task
                        }
                    }),
            }
        case "CHANGE_PLAN" : 
            return {
                ...state, 
                plan : action.payload
            }
        case "CHANGE_PROCESS" : 
            return {
                ...state, 
                process : action.payload
            }
        case "CHANGE_DONE" : 
            return {
                ...state, 
                done : action.payload
            }
        default :
            return state
        
    }
}

export default reducerTask
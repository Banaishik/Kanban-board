const defaultState = 
{
    notes : [
        {
            id : 1,
            name : "Name task",
            description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            coloredSentence : [],
        }
    ],
    noteCurrentId : 0
}

const reducerNote = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_NOTE" :
            return {
                ...state,
                notes : [action.payload, ...state.notes]
            }
        case "DELETE_NOTE" :
            return {
                ...state,
                notes : state.notes.filter(item => item.id !== action.payload)
            }
        case "SEND_CURRENT_ID" :
            return {
                ...state,
                noteCurrentId : action.payload
            }
        case "CHANGE_NOTE" : 
            return {
                ...state,
                notes : state.notes.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return item;
                    }
                })
            }
        case "CHANGE_ALL_NOTE" : 
            return {
                ...state,
                notes : action.payload
            }
        default :
            return state
    }
}

export default reducerNote
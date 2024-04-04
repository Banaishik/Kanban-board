const TYPES_ACTION = {
    addNote : "ADD_NOTE",
    deleteNote : "DELETE_NOTE",
    sendCurrentId : "SEND_CURRENT_ID",
    changeNote : "CHANGE_NOTE",
    changeAllNotes : "CHANGE_ALL_NOTE"
}

const actionAddNote = (note) => {
    return {
        type : TYPES_ACTION.addNote,
        payload : note
    }
}

const actionDeleteNote = (id) => {
    return {
        type : TYPES_ACTION.deleteNote,
        payload : id
    }
}

const actionCurrentIdNote = (id) => {
    return {
        type : TYPES_ACTION.sendCurrentId,
        payload : id
    }
}

const actionChangeNote = (note) => {
    return {
        type : TYPES_ACTION.changeNote,
        payload : note
    }
}

const actionChangeAllNotes = (array) => {
    return {
        type : TYPES_ACTION.changeAllNotes,
        payload : array
    }
}

export {
    actionAddNote,
    actionDeleteNote,
    actionCurrentIdNote,
    actionChangeNote,
    actionChangeAllNotes
}
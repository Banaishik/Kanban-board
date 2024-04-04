import { combineReducers, createStore, applyMiddleware} from "redux";
import reducerTask from "./reducers/reducerTask";
import reducerNote from "./reducers/reducerNote";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    stateNotes : reducerNote,
    stateTasks : reducerTask
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
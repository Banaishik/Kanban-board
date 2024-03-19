import { createStore } from "redux";
import reducerTask from "./reducers/reducerTask";

const store = createStore(reducerTask)

export default store
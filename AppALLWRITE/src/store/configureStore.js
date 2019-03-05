import { createStore } from 'redux'
import sessionReducer from './reducers/session_reducer'

export default createStore(sessionReducer)

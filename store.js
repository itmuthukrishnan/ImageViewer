import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import authorReducer from './reducer/authorReducer'


const rootReducer = combineReducers ({

    author:authorReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
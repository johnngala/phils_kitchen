import {combineReducers} from 'redux'
import alertReducer from './reducers/alertReducer'
import cartReducer from './reducers/cartReducer'

const rootReducer = combineReducers({
    alertReducer,
    cartReducer
})

export default rootReducer
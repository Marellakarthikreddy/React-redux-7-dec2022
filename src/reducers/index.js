import counter from './Counters'
import {combineReducers} from 'redux'

const allReducers=combineReducers({
    counter:counter
})
export default allReducers
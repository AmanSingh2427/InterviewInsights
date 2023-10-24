import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import getDetailsReducer from './reducers/getDetailsReducer'

const reducer= combineReducers({
    getDetails:getDetailsReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;
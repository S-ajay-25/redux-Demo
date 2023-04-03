const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const initialState = {
    loading:false,
    users : [],
    error:''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'


const fetchUserRequest = () => {
    return {
        type:FETCH_USERS_REQUESTED
    }
}
const fetchUserSucceede = (users) => {
    return {
        type:FETCH_USERS_SUCCEEDED,
        payload:users
    }
}
const fetchUserError = (error) => {
    return {
        type:FETCH_USERS_ERROR,
        payload:error
    }
}

const reducer = (state = initialState,action) => {

    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading:true
            }
            case FETCH_USERS_SUCCEEDED:
                return {
                    ...state,
                    users:action.payload,
                    error:''
                }
                case FETCH_USERS_ERROR:
                    return {
                        ...state,
                        users:[],
                        error:action.payload
                    }
                default:
                    return state
    }

}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchUserSucceede(users))

        }).catch(error => {
            dispatch(fetchUserError(error.message))
        })

    }
}

const store  = createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(() => { console.log(store.getState())})

store.dispatch(fetchUsers())
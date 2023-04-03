// console.log("From index js")
// console.log("This is Redux Tutorial")

const redux = require('redux')
const createStore = redux.createStore //The createStore function is a core function in Redux that is used to create a Redux store, which is an object that holds the application state.
const bindActionCreators = redux.bindActionCreators

const cake = 'Cake Shop'
const restocked  = "restocked"

function ordercake() {
    return {
        type:cake,
        paload:1,
    }
}
function restockedcake(qty = 1) {
    return {
        type:restocked,
        payload:qty
    }
}

const initialState = {
    numOfCakes : 10
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case cake:
            return{
                ...state,
                numOfCakes:state.numOfCakes - 1
            }
            case restocked:
                return {
                    ...state,
                    numOfCakes:state.numOfCakes + action.payload
                }
            default:
                return state
    }
}
const store = createStore(reducer)
console.log("initial State",store.getState())

const unsubscribe = store.subscribe(() =>
console.log("Update store ",store.getState()))


const action = bindActionCreators({ordercake,restockedcake},store.dispatch)
action.ordercake()
action.ordercake()
action.restockedcake(3)

// store.dispatch(ordercake())
// store.dispatch(ordercake())
// store.dispatch(restockedcake(4))

unsubscribe()
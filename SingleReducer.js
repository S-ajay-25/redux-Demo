// console.log("From index js")
// console.log("This is Redux Tutorial")

const redux = require('redux')
const createStore = redux.createStore //The createStore function is a core function in Redux that is used to create a Redux store, which is an object that holds the application state.
const bindActionCreators = redux.bindActionCreators

const cake = 'Cake Shop'
const restocked  = "restocked"
const ice_cream = "Ice-Cream"
const restock_icecream = 'restock Ice-cream'

function ordercake() {
    return {
        type:cake,
        payload:1,
    }
}
function restockedcake(qty = 1) {
    return {
        type:restocked,
        payload:qty
    }
}
function IceCream(qty = 1) {
    return {
        type:ice_cream,
        payload:qty
    }
}
function restockIceCream(qty = 1){
    return {
        type:restock_icecream,
        payload:qty
    }
}

const initialState = {
    numOfCakes : 10,
    numOfIceCreams:20
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
                case ice_cream:
                    return {
                        ...state,
                        numOfIceCreams:state.numOfIceCreams -1 
                    }
                    case restock_icecream:
                        return {
                            ...state,
                            numOfIceCreams:state.numOfIceCreams + action.payload
                        }
            default:
                return state
    }
}
const store = createStore(reducer)
console.log("initial State",store.getState())

const unsubscribe = store.subscribe(() => 
console.log("Update store ",store.getState()))


const actions = bindActionCreators({ordercake,restockedcake,IceCream,restockIceCream},store.dispatch)
actions.ordercake()
actions.ordercake()
actions.IceCream()
actions.restockedcake(3)
actions.restockIceCream(3)

// store.dispatch(ordercake())
// store.dispatch(ordercake())
// store.dispatch(restockedcake(4))

unsubscribe()
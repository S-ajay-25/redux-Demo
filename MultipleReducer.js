const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducer = redux.combineReducers

const cake = "Cake"
const restoredCake = "Restored Cake"
const iceCream = "IceCream"
const restoredIceCream = "Restored IceCream"

function orderCake(qty = 1) {
    return{
        type:cake,
        payload:qty
    }
}
function restoreCake(qty = 1) {
    return {
        type:restoredCake,
        payload:qty
    }
}
function iceCreams(qty = 1 ) {
    return {
        type:iceCream,
        payload:qty
    }
}
function restoreIceCream(qty = 1) {
    return {
        type:restoredIceCream,
        payload:qty
    }
}

const initialCakeState = {
    numOfCakes:10
}
const initialIceCreamState = {
    numOfIceCreams : 20
}

const cakeReducer = (state = initialCakeState,action) => {
    switch(action.type){
        case cake:
            return {
                ...state,
                numOfCakes:state.numOfCakes - 1,
            }
            case restoredCake:
                return {
                    ...state,
                    numOfCakes:state.numOfCakes + action.payload,
                }
                default:
                    return state
    }
}
const iceCreamReducer = (state = initialIceCreamState,action) => {
    switch(action.type){
        case iceCream:
            return {
                ...state,
                numOfIceCreams:state.numOfIceCreams - 1
            }
            case restoredIceCream:
                return {
                    ...state,
                    numOfIceCreams:state.numOfIceCreams + action.payload
                }
                default:
                    return state
    }
}
const rootReducer = combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
})

const store  = createStore(rootReducer)
console.log('initial state',store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Update Store',store.getState())
})


const actions= bindActionCreators({orderCake,restoreCake, iceCreams,restoreIceCream},store.dispatch)
actions.orderCake()
actions.iceCreams()
actions.restoreCake()
actions.restoreIceCream()
unsubscribe()
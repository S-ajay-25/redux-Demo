const redux = require('redux')
const produce = require('immer').produce
const initialState = {
    name: 'Ajay',
    address:{
        street:'123 street',
        city:'Bengaluru',
        state: 'MA',
    },

    
}
const street_updated = 'street_update'
const updateStreet = (city) => {
    return {
        type:street_updated,
        payload:city,
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case street_updated:
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         city:action.payload,
            //     },
// }
return produce(state,(draft) => {

    draft.address.city = action.payload
})
            default:{
                return state
            }
                
    }
}

const store = redux.createStore(reducer)
console.log("initial State",store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState())
})
store.dispatch(updateStreet('Hyderabad'))
unsubscribe()
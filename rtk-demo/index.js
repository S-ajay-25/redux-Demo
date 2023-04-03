const store = require('./app/store')
const cakeActions = require('./feature/cake/cakeSlice').cakeActions
const iceCreamActions = require('./feature/ice/iceCreamSlice').iceCreamActions

console.log("Initial Store",store.getState())
const unsubscribe = store.subscribe( () => {
    // console.log("Update log",store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(3))

unsubscribe()
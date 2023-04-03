const configurestore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../feature/cake/cakeSlice')
const reduxlogger = require('redux-logger')
const iceCreamReducer = require('../feature/ice/iceCreamSlice')

const logger = reduxlogger.createLogger()
const store = configurestore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
    },
    middleware: (getDefaultMware) => getDefaultMware().concat(logger) 
})


module.exports = store
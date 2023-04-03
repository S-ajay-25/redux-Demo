const CreateSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numOfCake : 10,
} 
const cakeSlice = CreateSlice({
    name:'cake',
    initialState ,
    // If the key and value are same using ES6 shorthand notation we can take the value just see the above line
    reducers : {
        ordered: (state) => {
            state.numOfCake--
        },
        restocked: (state,action) => {
            state.numOfCake += action.payload 
            // Here How actions is came, The CreateSlice is automatically creates the actions creates same name as the reducer functions
            
        }
    }

})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
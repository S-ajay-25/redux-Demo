const CreateSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numoficeCream : 20
}
const iceCreamSlice = CreateSlice({
    name:'iceCream',
    initialState,
    reducers : {
        ordered: (state) => {
            state.numoficeCream--
        },
        restocked: (state,action) => {
            state.numoficeCream += action.payload
        }
    }


})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions
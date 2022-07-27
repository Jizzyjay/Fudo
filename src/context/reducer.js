export const actionType = {
    Set_USER : 'SET_USER'
}

const reducer = ( state, action ) => {
    console.log(action);

    switch(action.type) {
        case actionType.Set_USER:
            return {
                ...state,
                user : action.user,
            };

            default:
                return state;
    }
};

export default reducer;
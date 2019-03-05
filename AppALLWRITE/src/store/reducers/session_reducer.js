const initialState = { 
    email: "",
    pseudo: "",
    token: "",
    isConnect: "",
}
function sessionReducer(state = initialState, action){
    switch (action.type) {
        case 'SET_SESSION':
            nextState = {
                ...state,
                email: action.email,
                pseudo: action.pseudo,
                token: action.token,
                isConnect: true,
            }
        case 'REMOVE_SESSION':
            nextState = {
                ...state,
                email: "",
                pseudo: "",
                token: "",
                isConnect: false,
            }
        default:
              return state;
    }
}

export default sessionReducer;

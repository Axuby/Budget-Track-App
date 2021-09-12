const authReducerReducer = []

export default (state = authReducerReducer, action)=> {

        switch (action) {
            case "SIGN_IN":
                    return [
                        ...state,
                        action.signinDetails
                    ]
            case "SIGN_UP":
                return [
                    ...state,
                    action.signupDetails
                ]
            case "LOG_OUT":
                return state.filter((user)=> user.id !== action.id)
            default:
                state;
        }
}
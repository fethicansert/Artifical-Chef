
export const inputReducer = (state, action) => {

    switch (action.type) {

        case 'username': return { ...state, username: action.payload };

        case 'email': return { ...state, email: action.payload };

        case 'password': return { ...state, password: action.payload };

        case 'confirmPassword': return { ...state, confirmPassword: action.payload };

        default:  return state;
    };
}

export const validInputReducer = (state, action) => {

    switch (action.type) {

        case 'isValidUsername': return { ...state, isValidUsername: action.payload };

        case 'isValidEmail': return { ...state, isValidEmail: action.payload };

        case 'isValidPassword': return { ...state, isValidPassword: action.payload };

        case 'isValidConfirmPassword': return { ...state, isValidConfirmPassword: action.payload };

        default: return state;
    };
};

export const showPlaceholderReducer = (state, action) => {

    switch (action.type) {

        case 'showUsernamePlaceholder': return { ...state, showUsernamePlaceholder: action.payload };

        case 'showEmailPlaceholder': return { ...state, showEmailPlaceholder: action.payload };

        case 'showPasswordPlaceholder': return { ...state, showPasswordPlaceholder: action.payload };

        case 'showConfirmPasswordPlaceholder': return { ...state, showConfirmPasswordPlaceholder: action.payload };

        default: return state;
    };
};
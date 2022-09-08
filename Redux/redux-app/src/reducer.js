export const initialState = {
    user: null,
};

const reducer = (store, action) => {
    // console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...store,
                user: action.user,
            };

        default:
            return store;
    }
};

export default reducer;

// what the hell is a reducer
// dispatsh set_user action like telling the global state go settheuser
// reducer is always listining waiting for a message like SET_USER
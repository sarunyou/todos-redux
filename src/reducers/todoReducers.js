export function todo(states = [], action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...states, {
                id: action.id,
                text: action.text
            }];
        case "DELETE_TODO":
            return states.filter(state => state.id !== action.id);
        case "TOGGLE":
            return states.map(state => {
                if (action.id !== state.id)
                    return state;
                else
                    return {...state, toggle: !state.toggle};

            })
        default:
            return states;
    }
}
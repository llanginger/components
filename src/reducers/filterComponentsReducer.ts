export interface filterCompontReducer {
    filter: string;
}

const initState: filterCompontReducer = {
    filter: ""
};

export const filterCompontReducer = (
    state: filterCompontReducer = initState,
    action
) => {
    switch (action.type) {
        case "FILTER_COMPONENTS":
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};

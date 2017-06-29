export interface dataReducer {
    data: any;
}

const initState: dataReducer = {
    data: {}
};

export const dataReducer = (state: dataReducer = initState, action) => {
    switch (action.type) {
        case "NEW_DATA":
            return {
                data: action.payload
            };
        default:
            return state;
    }
};

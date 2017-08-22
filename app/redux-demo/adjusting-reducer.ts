let incrementAction: Action = {
    type: 'INCREMENT'
}

let decrementAction: Action = {
    type: 'DECREMENT'
}

let plusAction: Action = {
    type: 'PLUS',
    payload: 7
}

let reducer: Reducer<number> = (state: number, action: Action) => {
    // if (action.type === 'INCREMENT') {
    //     return state + 1;
    // }
    // if (action.type === 'DECREMENT') {
    //     return state - 1;
    // }
    // return state;
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'PLUS':
            return state + action.payload;
        default:
            return state;
    }
}
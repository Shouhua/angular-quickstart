var incrementAction = {
    type: 'INCREMENT'
};
var decrementAction = {
    type: 'DECREMENT'
};
var plusAction = {
    type: 'PLUS',
    payload: 7
};
var reducer = function (state, action) {
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
};
//# sourceMappingURL=adjusting-reducer.js.map
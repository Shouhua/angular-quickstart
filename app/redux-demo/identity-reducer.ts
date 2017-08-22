interface Action {
    type: string;
    payload?: any;
}

interface Reducer<T> {
    (state: T, action: Action): T
}

let adjustReducer: Reducer<number> = (state: number, action: Action) => {
    return state;
}
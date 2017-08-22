


export const INCREMENT: string = 'INCREMENT';
export const increment: ActionCreator<Action> = () => ({
    type: INCREMENT
})

export const DECREMENT: string = 'INCREMENT';
export const decrement: ActionCreator<Action> = () => ({
    type: DECREMENT
})

interface ActionCreator<T> {
    (): ({})
}


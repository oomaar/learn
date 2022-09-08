export const incrment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decrment = () => {
    return {
        type: 'DECREMENT'
    }
}
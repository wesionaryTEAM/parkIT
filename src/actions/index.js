export const DUMMY = 'DUMMY';
export const INCREMENT = 'INCREMENT'

export function CommonAction (data) {
    return { type: DUMMY, payload: data }
}

export function Increase() {
    return {type:INCREMENT}
}
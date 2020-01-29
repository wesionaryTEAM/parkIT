import { DUMMY, INCREMENT } from '../actions';

const initialState = {
  dummy: [
    {
      title: 'this is a title',
    },
  ],
  count: 0
};
export default (state = initialState, action) => {
  switch (action.type) {
    case DUMMY:
      return {
        ...state,
        todos: [
          ...state.dummy,
          action.data
        ]
      }
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}
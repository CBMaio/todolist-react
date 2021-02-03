import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  CHANGE_ACTIVITY,
  GET_ACTIVITIES,
} from "./actions/todo";

export const initialState = {
  activities: [],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        activities: [...state.activities, action.payload.activity],
      };

    default:
      return state;
  }
}

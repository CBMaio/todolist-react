import { ADD_ACTIVITY, DELETE_ACTIVITY, RESET_ACTIVITY } from "./actions/todo";

export const initialState = {
  activities: [],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        activities: [action.payload.activity, ...state.activities],
      };

    case DELETE_ACTIVITY:
      return {
        activities: state.activities.filter(
          (activity) => activity.id !== action.payload.id
        ),
      };

    case RESET_ACTIVITY:
      return {
        activities: initialState.activities,
      };

    default:
      return state;
  }
}

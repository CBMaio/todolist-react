import { ADD_ACTIVITY, DELETE_ACTIVITY, RESET_ACTIVITY } from "./actions/todo";
import createPersistedReducer from "use-persisted-reducer";

export const usePersistedReducer = createPersistedReducer('state');

export const initialState = {
  activities: [],
  /* JSON.parse(window.localStorage.getItem("activities")) || []*/
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

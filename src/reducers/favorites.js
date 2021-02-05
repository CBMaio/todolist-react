import { ADD_ACTIVITY, DELETE_ACTIVITY } from "./actions/todo";
import createPersistedReducer from "use-persisted-reducer";

export const usePersistedReducerFav = createPersistedReducer('stateFav');

export const initialStateFav = {
  favorites: [],
};

export function favoritesReducer(state = initialStateFav, action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        favorites: [action.payload.favorite, ...state.favorites],
      };

    case DELETE_ACTIVITY:
      return {
        favorites: state.favorites.filter(
          (fav) => fav.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}

// initial state
export const initialState = {
  visible: false,
};

// action types
const SET_PROJECT_VISIBILITY = "SET_PROJECT_VISIBILITY";

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT_VISIBILITY:
      console.log(action.payload);

      return {
        ...state,
        id: action.payload.id,
        visible: action.payload.visibility,
      };
    default:
      return state;
  }
}

// actions
export const setProjectVisibility = (id, visibility) => ({
  type: SET_PROJECT_VISIBILITY,
  payload: { id, visibility },
});

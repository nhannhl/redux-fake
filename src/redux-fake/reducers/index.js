import actions from "../actions";
import todoListReducer from "./todoListReducer";

const reducer = (state, action) => {
  const masterType = action.type.split("/");

  switch(masterType[0]) {
    case actions.MASTER_TODO_LIST:
      return todoListReducer(state, {...action, type: masterType[1]});
    default:
      return state;
  }
};

export default reducer;
const userInfoReducer = (state = null, action) => {
  switch (action.type) {
    case "INSERT_USER":
      return action.payload;
    case "REMOVE_USER":
      return "";
    default:
      return state;
  }
};
export default userInfoReducer;

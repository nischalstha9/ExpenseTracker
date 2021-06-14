const AccountBookReducer = (state = [], action) => {
  switch (action.type) {
    case "INSERT_BOOKS":
      return action.payload;
    case "REMOVE_BOOKS":
      return [];
    default:
      return state;
  }
};
export default AccountBookReducer;

const changeTheName = (state = "", action) => {
    switch (action.type) {
      case "CHANGE_NAME":
        return action.payload;
      default:
        return state;
    }
  };
  
  const changeTheEmail = (state = "", action) => {
    switch (action.type) {
      case "CHANGE_EMAIL":
        return action.payload;
      default:
        return state;
    }
  };
export { changeTheName, changeTheEmail };
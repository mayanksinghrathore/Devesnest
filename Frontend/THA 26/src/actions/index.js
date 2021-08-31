export const changeName = (data) => {
    return {
      type: "CHANGE_NAME",
      payload: data,
    };
  };
  
  export const changeEmail = (data) => {
    return {
      type: "CHANGE_EMAIL",
      payload: data,
    };
  };
export const addCarAction = (payload) => {
  return {
    type: "ADD_CAR",
    payload,
  };
};

export const deleteCarAction = (payload) => {
  return {
    type: "DELETE_CAR",
    payload,
  };
};

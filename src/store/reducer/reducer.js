const defaultState = {
  items: [],
};

const counterReducer = (state = defaultState,action) => {
  switch (action.type) {
    case "ADD_CAR": {
      return { ...state, items: [...state.items, action.payload] };
    }
    case "DELETE_CAR": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default counterReducer;

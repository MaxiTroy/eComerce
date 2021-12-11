export const initialState = {
  car: [],
  user: null,
};

export const actionTypes = {
  ADD_TO_CAR: "ADD_TO_CAR",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: "SET_USER",
  EMPTY_CAR: "EMPTY_CAR",
};

export const getCarTotal = (car) => {
  car?.reduce((acc, item) => item.price + acc, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CAR":
      return {
        ...state,
        car: [...state.car, action.item],
      };
    case "REMOVE_ITEM":
      const index = state.car.findIndex((carItem) => carItem.id === action.id);
      let newCar = [...state.car];
      if (index >= 0) {
        newCar.splice(index, 1);
      } else {
        console.log("Cant remove product");
      }
      return {
        ...state,
        car: newCar,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_CAR":
      return {
        ...state,
        car: action.car,
      };
    default:
      return state;
  }
};

export default reducer;

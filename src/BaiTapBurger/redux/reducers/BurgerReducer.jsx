const burgerState = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {
    salad: 10,
    cheese: 25,
    beef: 50,
  },
  total: 85,
};
export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_BREADMID": {
      let { propBurger, payload } = action;
      if (payload === -1 && state.burger[propBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propBurger] += payload;
      state.burger = burgerUpdate;

      state.total += payload * state.menu[propBurger];

      return { ...state };
    }
    case "MINUS_BREADMID": {
      let { propBurger, payload } = action;
      if (payload === -1 && state.burger[propBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propBurger] += payload;
      state.burger = burgerUpdate;

      state.total += payload * state.menu[propBurger];

      return { ...state };
    }
  }
  return { ...state };
};

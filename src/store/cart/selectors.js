export const selectCartModuleState = (state) => state.cart;

export const selectCartDishIds = (state) => Object.keys(state.cart);

export const selectDishCountByid = (state, { dishId }) => selectCartModuleState(state)[dishId] || 0;

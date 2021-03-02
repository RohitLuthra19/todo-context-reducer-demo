export const Action = {
  CREATE_TODO: "create-todo",
  UPDATE_TODO: "update-todo",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case Action.CREATE_TODO: {
      return [...state, action.payload];
    }

    case Action.UPDATE_TODO: {
      const { id, status } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, complete: status } : item
      );
    }

    default:
      return state;
  }
};

class Store {
  state;

  reducer;

  subscribers = {};

  constructor(reducer) {
    this.reducer = reducer;
    this.state = reducer();
  }

  subscribe(key, callback) {
    if (key && typeof callback === "function") {
      this.subscribers[key] = callback;
      this.subscribers[key](this.state);

      const unsubscribe = () => delete this.subscribers[key];

      return unsubscribe.bind(this);
    }

    return () => {};
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    Object.values(this.subscribers).forEach((callback) => callback(this.state));
  }
}

export const createStore = (() => {
  let store;

  return (reducer) => {
    if (!store) {
      store = new Store(reducer);
    }

    return store;
  };
})();

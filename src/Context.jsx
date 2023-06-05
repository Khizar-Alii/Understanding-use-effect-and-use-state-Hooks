import React from 'react';
import create from 'zustand';

//Created a new Zustand store
const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

//Created a new React Context
const CounterContext = React.createContext();

//Created a Provider component to wrap the app with
const CounterProvider = ({ children }) => {
  const counterStore = useCounterStore(); // Access the Zustand store

  return (
    <CounterContext.Provider value={counterStore}>
      {children}
    </CounterContext.Provider>
  );
};

//Created a custom hook to consume the context value
const useCounter = () => {
  const counterStore = React.useContext(CounterContext); // Access the counter store from context
  return counterStore; // Return the store object
};

// Use the counter store in a component
const Counter = () => {
  const { count, increment, decrement } = useCounter(); // Access store methods

  return (
    <div style={{display : 'flex',flexDirection:'column',alignItems:'center'}}>
      <p>Count: {count}</p>
      <div>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

// Step 6: Use the CounterProvider to wrap your app
const Context = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Context;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

// slice = reducer + actions (type + payload)
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (currentState) => {
      currentState.value += 1;
    },
    decrement: (currentState) => {
      currentState.value -= 1;
    },
    incrementByAmount: (currentState, action: PayloadAction<number>) => {
      currentState.value += action.payload;
    },
    decrementByAmount: (currentState, action: PayloadAction<number>) => {
      currentState.value -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    // create reducer methods
    bandAdded(state, action) {
      state.entities.push({
        name: action.payload,
        id: uuid()
      });
    },
    bandRemoved(state, action) {
      state.entities = state.entities.filter(band => band.id !== action.payload);
    }
  },
});

// export the action creators
export const { bandAdded, bandRemoved } = bandsSlice.actions;

export default bandsSlice.reducer;

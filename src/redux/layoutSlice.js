import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: [],
  reducers: {
    addBlock: (state, action) => {
      state.push({ type: action.payload });
    },
    deleteBlock: (state, action) => {
      state.splice(action.payload, 1);
    },
    moveBlock: (state, action) => {
      const { fromIndex, toIndex } = action.payload;
      const [movedItem] = state.splice(fromIndex, 1);
      state.splice(toIndex, 0, movedItem);
    },
    saveLayout: (state) => {
      console.log("Saved JSON:", JSON.stringify(state));
    },
    setLayout: (state, action) => action.payload,
  },
});

export const { addBlock, deleteBlock, moveBlock, saveLayout, setLayout } =
  layoutSlice.actions;
export default layoutSlice.reducer;

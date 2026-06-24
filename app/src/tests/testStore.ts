import { configureStore } from "@reduxjs/toolkit";

export const createTestStore = () => {
  return configureStore({
    reducer: {},
  });
};

export type TestStore = ReturnType<typeof createTestStore>;

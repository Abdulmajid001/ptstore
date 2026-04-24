import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import cartReducer from "../cart/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

/////// Previous simpler version without persistence: ////////

// import { configureStore } from"@reduxjs/toolkit";
// import cartReducer from "../cart/cartSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedReducer } from './auth/auth-slice';
import { contactsReducer } from './contactSlice/contactsSlice';
import { filterReducer } from './Filter/filterSlice';
import { handleAddContactFulfilled } from 'ToastAction/ToastAction';

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(handleAddContactFulfilled),
});

export const persistor = persistStore(store);

// .concat(handleAddContactFulfilled),

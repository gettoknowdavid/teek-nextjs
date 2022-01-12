import {
  combineReducers, configureStore, PreloadedState, Store,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE,
} from 'redux-persist';
import { globalSlice } from './slices/global.slice';

const persistGlobal = { key: 'global', version: 1, storage };

export default function teekStore(preloadedState: PreloadedState<any>): Store {
  return configureStore({
    preloadedState,
    reducer: combineReducers({
      globalRepo: persistReducer(persistGlobal, globalSlice.reducer),
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
}

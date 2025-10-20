import { combineReducers } from "redux"
import generalReducer from "./reducers/general"
import { configureStore } from '@reduxjs/toolkit'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    general: generalReducer,
  })

export const store = configureStore({
    reducer: persistReducer(
    {
      key: 'root',
      version: 1,
      storage
    },
    reducers
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export const persistor = persistStore(store)

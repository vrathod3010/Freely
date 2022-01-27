import {TripsReducer, tripsReducer} from './trips'

import {configureStore} from '@reduxjs/toolkit'

export interface RootReducer {
  trips: TripsReducer
}
export const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
})

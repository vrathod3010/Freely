import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {RootReducer} from './store'
import {Trip} from '../models'
import {fetchTripsData} from '../utils'

export interface TripsReducer {
  data: Trip[]
  loading: boolean
}

export const fetchTrips = createAsyncThunk('trips/fetchTrips', async () => {
  const response = await fetchTripsData()
  return response
})

const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    data: [] as Trip[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTrips.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchTrips.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    builder.addCase(fetchTrips.rejected, state => {
      state.loading = false
    })
  },
})

export const tripsReducer = tripsSlice.reducer

export const selectTrips: (state: RootReducer) => TripsReducer = state =>
  state.trips

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '../locations.json'; // Import your JSON data

const initialState = {
  locations: data, // Initial state with data from JSON
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocations(state, action: PayloadAction<typeof initialState.locations>) {
      state.locations = action.payload;
    },
  },
});

// Define the type for the Redux state
interface LocationsState {
  locations: typeof initialState.locations;
}

// Selector to get the locations state
export const selectLocations = (state: { locations: LocationsState }) => state.locations.locations;

export const { setLocations } = locationsSlice.actions;

export default locationsSlice.reducer;

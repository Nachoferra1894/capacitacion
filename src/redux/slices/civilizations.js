
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { civilizationApi } from '../../api/civilizationApi';

const civilizations = createEntityAdapter()

const initialState = {
  civilizations : [],
}

export const slice = createSlice({
  name: 'civilizations',
  initialState,
  reducers: {
    addCivilization(state , action ) {
        const newEvent = action.payload;
        state.civilizations = [...state.civilizations, newEvent];
    },
  },
})

export const addCivilizations = () => async (dispatch) => {
  const data = civilizationApi.getCivilizations()
  console.log(data)
};

export default slice.reducer



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

export const addCivilizations = (civilizations) => async (dispatch) => {
  civilizations.map((item,index)=>{
      dispatch(slice.actions.addCivilization(item))
  })
};

export default slice.reducer


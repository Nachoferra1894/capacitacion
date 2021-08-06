
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { fetchArticle } from '../articles/articlesSlice'

const civilizations = createEntityAdapter()

export const slice = createSlice({
  name: 'civilizations',
  initialState: civilizations.getInitialState(),
  reducers: {
    addCivilization(state , action ) {
        const newEvent = action.payload;
        state.civilizations = [...state.civilizations, newEvent];
    },
  },
})


export const addCivilizations = (newEvent ) => async (dispatch) => {
	dispatch(slice.actions.addCivilization(newEvent));
};


const reducer = slice.reducer
export default reducer


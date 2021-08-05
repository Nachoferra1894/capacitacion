
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from '../store';
import { civilizationApi } from '../../api/civilizationApi';

interface CivilizationsState {
	civilizations: any[];
}

const initialState: CivilizationsState = {
	civilizations: []
};

const slice = createSlice({
	name: 'civilizations',
	initialState,
	reducers: {
        setCivilizations(state: CivilizationsState, action: PayloadAction<any[]>): void {
			state.civilizations = action.payload;
		},
	}
});

export const fetchCivilizations = (): AppThunk => async (dispatch): Promise<void> => {

};

export const { reducer } = slice;

export default slice;
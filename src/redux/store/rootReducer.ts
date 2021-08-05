import { combineReducers } from '@reduxjs/toolkit';
import { reducer as civilizationsReducer } from '../slices/civilizations';

const rootReducer = combineReducers({
  civilizations: civilizationsReducer,
});

export default rootReducer;

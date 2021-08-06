import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  civilizations: civilizationsReducer,
});

export default rootReducer;

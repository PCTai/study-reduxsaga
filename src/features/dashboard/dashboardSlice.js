import { createSelector, createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },
  highestStudentList: [],
  lowestStudentList: [],
  rankingByCityList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;
    },
    fetchDataFailed(state) {
      state.loading = false;
    },

    setStatistics(state, action) {
      state.statistics = action.payload;
    },
    setHighestStudentList(state, action) {
      state.highestStudentList = action.payload;
    },
    setLowestStudentList(state, action) {
      state.lowestStudentList = action.payload;
    },
    setRankingByCityList(state, action) {
      state.rankingByCityList = action.payload;
    },
  },
});

// Actions
export const dashboardActions = dashboardSlice.actions;

// Selectors
export const selectDashboardLoading = (state) => state.dashboard.loading;
export const selectDashboardStatistics = (state) => state.dashboard.statistics;
export const selectHighestStudentList = (state) => state.dashboard.highestStudentList;
export const selectLowestStudentList = (state) => state.dashboard.lowestStudentList;
export const selectRankingByCityList = (state) => state.dashboard.rankingByCityList;

// Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
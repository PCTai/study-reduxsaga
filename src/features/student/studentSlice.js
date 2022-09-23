import { createSlice } from "@reduxjs/toolkit"

const initialState={
    loading: false,
    list: [],
    filter: {
      _page: 1,
      _limit: 15,
    },
    pagination: {
      _page: 1,
      _limit: 15,
      _totalRows: 15,
    },
}

const studentSlice= createSlice({
    name: 'student',
    initialState,
    reducers :{
        fetchStudentList(state, action) {
            state.loading = true;
          },
          fetchStudentListSuccess(state, action) {
            state.list = action.payload;
            state.pagination = action.payload.pagination;
            state.loading = false;
          },
          fetchStudentListFailed(state) {
            state.loading = false;
          },
      
          setFilter(state, action) {
            state.filter = action.payload;
          },
      
          setFilterWithDebounce(state, action) {},
    }
})

export const studentActions = studentSlice.actions;

export const selectStudentList = (state) => state.student.list;
export const selectStudenLoading = (state) => state.student.loading;
export const selectStudentFilter = (state) => state.student.filter;
export const selectStudentPagination = (state) => state.student.pagination;
const studentReducer= studentSlice.reducer;
export default studentReducer;
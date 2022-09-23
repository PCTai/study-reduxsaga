import { createSelector, createSlice } from "@reduxjs/toolkit"



const initialState={
    list: [],
    loading: false,
}

const citySlice =createSlice({
    name: 'city',
    initialState,
    reducers :{
        fecthCityList(state,action){
            state.loading=true;
        },
        fecthCityListSuccess(state,action){
            state.loading=false;
            state.list= action.payload;
        },
        fecthCityListFailed(state,action){
            state.loading=false;
        }
    }
})

export const cityActions= citySlice.actions;
export const selectCityList = (state) => state.city.list;
export const selectCityListMap = createSelector((state) => state.city.list, (cityList) =>{
    return cityList.reduce((citymap,cur)=>{
        citymap[cur.code]= cur.name;
        return  citymap;
    },[])
})


const cityReducer= citySlice.reducer;
 export default cityReducer;
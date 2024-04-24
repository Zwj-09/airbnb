import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getHomeGoodPriceList,
  getHomeHighScoreList,
  getHomeDiscountList
} from '@/services/home/index';

export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeData',
  (payload, { dispatch }) => {
    getHomeGoodPriceList().then((res) => {
      dispatch(setGoodPriceListAction(res.data));
    });
    getHomeHighScoreList().then((res) => {
      dispatch(setHighScoreListAction(res.data));
    });
    getHomeDiscountList().then((res) => {
      dispatch(setDiscountListAction(res.data));
    });
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceList: {},
    highScoreList: {},
    disCountList: {}
  },
  reducers: {
    setGoodPriceListAction(state, action) {
      state.goodPriceList = action.payload;
    },
    setHighScoreListAction(state, action) {
      state.highScoreList = action.payload;
    },
    setDiscountListAction(state, action) {
      state.disCountList = action.payload;
    }
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, action) {
    //   state.goodPriceList = action.payload;
    // }
  }
});

export const {
  setGoodPriceListAction,
  setHighScoreListAction,
  setDiscountListAction
} = homeSlice.actions;

export default homeSlice.reducer;

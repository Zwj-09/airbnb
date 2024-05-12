import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getHomeGoodPriceList,
  getHomeHighScoreList,
  getHomeDiscountList,
  getHomeRecommendtList,
  getHomeLongFortList,
  getHomePlusList
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
    getHomeRecommendtList().then((res) => {
      dispatch(setRecommendListAction(res.data));
    });
    getHomeLongFortList().then((res) => {
      dispatch(setLongForListAction(res.data));
    });
    getHomePlusList().then((res) => {
      dispatch(setPlusListAction(res.data));
    });
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceList: {},
    highScoreList: {},
    disCountList: {},
    recommendList: {},
    longForList: {},
    plusList: {}
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
    },
    setRecommendListAction(state, action) {
      state.recommendList = action.payload;
    },
    setLongForListAction(state, action) {
      state.longForList = action.payload;
    },
    setPlusListAction(state, action) {
      state.plusList = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setGoodPriceListAction,
  setHighScoreListAction,
  setDiscountListAction,
  setRecommendListAction,
  setLongForListAction,
  setPlusListAction
} = homeSlice.actions;

export default homeSlice.reducer;

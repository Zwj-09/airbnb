import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getHomeGoodPriceList
  // getHomeHighScoreList
} from '@/services/home/index';

export const fetchHomeDataAction = createAsyncThunk(
  'home/fetchHomeData',
  async () => {
    const homeGoodPriceList = await getHomeGoodPriceList();

    if (homeGoodPriceList.status === 200) {
      return homeGoodPriceList.data;
    }

    // const highScoreData = await getHomeHighScoreList();

    // console.log('highScoreData', highScoreData.data);
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceList: {}
  },
  reducers: {
    setGoodPriceListAction(state, action) {
      state.goodPriceList = action.payload;
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, action) {
      state.goodPriceList = action.payload;
    }
  }
});

export const { setGoodPriceListAction } = homeSlice.actions;

export default homeSlice.reducer;

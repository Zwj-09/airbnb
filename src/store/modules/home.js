import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHomeGoodPriceList } from '@/services/home/index';

export const fetchHomeDataAction = createAsyncThunk(
  'home/fetchHomeData',
  async () => {
    const res = await getHomeGoodPriceList();

    if (res.status === 200) {
      return res.data;
    }
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    // 高性价比数据 goodprice、highscore
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

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//const apiKey = 'YOUR_NEWS_API_KEY';

// Async thunk to fetch data from the News API
export const fetchDataFromAPI = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await fetch(
       ` https://newsapi.org/v2/top-headlines?country=us&apiKey=3615439cfa544144a7da811536d05fc3`
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error('Error fetching news data.');
  }
});
export const fetchBitcoinNews = createAsyncThunk('data/fetchBitcoinNews', async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=3615439cfa544144a7da811536d05fc3`
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error('Error fetching Bitcoin news data.');
  }
});
export const fetchUsNews = createAsyncThunk('data/fetchUsNews', async () => {
  try {
    const response = await fetch(
      ` https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3615439cfa544144a7da811536d05fc3`
     
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error('Error fetching US news data.');
  }
});
export const fetchAppleNews = createAsyncThunk('data/fetchAppleNews', async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2023-08-02&to=2023-08-02&sortBy=popularity&apiKey=3615439cfa544144a7da811536d05fc3`
     
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error('Error fetching Apple news data.');
  }
});


const newsSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    usNews: [],
    Apple:[],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataFromAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataFromAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataFromAPI.rejected, (state) => {
        state.loading = false;
        state.error = 'Error fetching news data.';
      })
      .addCase(fetchBitcoinNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBitcoinNews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBitcoinNews.rejected, (state) => {
        state.loading = false;
        state.error = 'Error fetching Bitcoin news data.';
      })
      .addCase(fetchUsNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsNews.fulfilled, (state, action) => {
        state.loading = false;
        state.usNews = action.payload;
      })
      .addCase(fetchUsNews.rejected, (state) => {
        state.loading = false;
        state.error = 'Error fetching USnews news data.';
      })
      .addCase(fetchAppleNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppleNews.fulfilled, (state, action) => {
        state.loading = false;
        state.Apple = action.payload;
      })
      .addCase(fetchAppleNews.rejected, (state) => {
        state.loading = false;
        state.error = 'Error fetching USnews news data.';
      });

  },
});

export default newsSlice.reducer;


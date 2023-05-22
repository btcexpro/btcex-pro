import { setAll } from "../../helper/set-all";
import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ICurrencyDetails {
    socketData: any
}

export const loadCurrencyDetails = createAsyncThunk(
    "app/loadCurrencyDetails",
    //@ts-ignore
    async ({socketData}: ICurrencyDetails) => {
        let data: any;
        if(socketData) {
            data = socketData;
        } else {
            data = await fetch('http://localhost:3001/v1/currencies')
            .then((res) => res.json())
            .then((rlt) => {
                return rlt.currencies;
            })
            .catch((err) => {
                console.log(err.message);
            });
        }
        return {
            data,
        }
    },
);

const initialState = {
    loading: true,
};

export interface ICurrencySlice {
    data: any;
}

const currencySlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        fetchAppSuccess(state, action) {
            setAll(state, action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadCurrencyDetails.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loadCurrencyDetails.fulfilled, (state, action) => {
                setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(loadCurrencyDetails.rejected, (state, { error }) => {
                state.loading = false;
                console.log(error);
            });
    },
});

const baseInfo = (state: RootState) => state.currency;

export default currencySlice.reducer;

export const { fetchAppSuccess } = currencySlice.actions;

export const getCurrencyState = createSelector(baseInfo, currency => currency);

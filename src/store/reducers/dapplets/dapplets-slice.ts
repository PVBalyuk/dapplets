import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunkPrefixes } from "./constants";
import { getDapplets } from "src/api";  
import { DirectionFilter } from "src/types";


export const getAllDapplets = createAsyncThunk(
    createAsyncThunkPrefixes.GET_ALL_DAPPLETS,
    async ({ start, direction, search }: any, thunkApi ) => {
        const response = await getDapplets(start, direction, search)
        if (typeof response !== 'object') {
            console.log('error')
            return;
        }

        console.log(response)
        return response.data
        
    }
)

// export const getDappletIcon = createAsyncThunk(

// )

interface IInitialState {
    dapplets: any[];
    status: null | string;
    error: null | string;
    currentAmount: number;
    start: number;
    direction: string;
    search: string;
}

const dappletsSlice = createSlice({
    name: 'dapplets',
    initialState: {
        dapplets: [],
        status: null,
        error: null,
        currentAmount: 0,
        start: 0,
        direction: DirectionFilter.DESC,
        search: '',
    } as IInitialState,
    reducers: {
        changeDirection: (state, {payload}) => {
            state.direction = payload
        },
        setSearchString: (state, {payload}) => {
            state.search = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllDapplets.fulfilled, (state, action) => {
            state.dapplets = action.payload;
            state.status = 'resolved';
            state.currentAmount += action.payload.length
        });
        builder.addCase(getAllDapplets.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
    },
});

export const { changeDirection, setSearchString} = dappletsSlice.actions

export default dappletsSlice.reducer

// [getAllDupplets.pending]: (state: any) => {
//     state.status = 'loading';
//     state.error = null;
// },
// [getAllDupplets.fulfilled]: (state: any, action: any) => {
//     state.dapplets = [...state, action.payload];
//     state.status = 'resolved';
//     state.error = null;
// },
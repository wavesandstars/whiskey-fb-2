import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",                     
    initialState: {
        brand: 'Brand',
        country: 'Country',
        year: 'Year',
        flavor: 'Flavor',
        price: 'Price',
    
        
    },
    reducers: {
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseCountry: (state, action) => { state.country = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseFlavor: (state, action) => { state.flavor = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        
        
    }
})


export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseCountry, chooseYear, chooseFlavor, choosePrice } = rootSlice.actions;




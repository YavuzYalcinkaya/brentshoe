import { createSlice } from "@reduxjs/toolkit";
import { shoes } from "../constants";
const imagesSlice = createSlice({
  name: "images",
  initialState: {
    bigShoeImg: shoes[0].bigShoe, // Başlangıçta büyük ayakkabı resmi bigShoe1 olarak ayarlandı.
    shoeImages: shoes, // Ayakkabı resimleri dizisi shoes olarak ayarlandı.
  },
  reducers: {
    setBigShoeImg: (state, action) => {
      state.bigShoeImg = action.payload;
    },
  },
});

export const { setBigShoeImg } = imagesSlice.actions;
export default imagesSlice.reducer;

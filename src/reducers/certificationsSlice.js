// src/redux/certificationsStore.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  certifications: [],
  isLoading: false,
  error: "",
};

// Funzione asincrona per ottenere tutte le certificazioni
export const fetchCertifications = createAsyncThunk(
  "certifications/fetchCertifications",
  async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/certifications`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch certifications");
    }
    return response.json();
  }
);

// Creazione dello slice per le certificazioni
const certificationsSlice = createSlice({
  name: "certifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCertifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.certifications = action.payload.certifications;
      })
      .addCase(fetchCertifications.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const getAllCertificate = (state) =>
  state.certificationsSlice.certifications;
export const isCertificateLoading = (state) =>
  state.certificationsSlice.isLoading;
export const certificateError = (state) => state.certificationsSlice.error;

export default certificationsSlice.reducer;

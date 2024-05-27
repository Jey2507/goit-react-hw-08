import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "tasks/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts"); 
        return response.data;
       
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addContact = createAsyncThunk(
    "tasks/addTask",
    async (text, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", text);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "tasks/deleteTask",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEvent,
  getAllEvents,
  getEvent,
  postEvent,
  putEvent,
} from "./events.operations";

const initialState = {
  events: [],
  currentEvent: null,
  isLoading: false,
  error: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
        state.currentEvent = null;
      })
      .addCase(getAllEvents.fulfilled, (state, { payload }) => {
        state.events = [...payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAllEvents.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEvent.fulfilled, (state, { payload }) => {
        state.currentEvent = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(postEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postEvent.fulfilled, (state, { payload }) => {
        state.events.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(postEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(putEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putEvent.fulfilled, (state, { payload }) => {
        state.currentEvent = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(putEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      // .addCase(addTaskOperation.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(addTaskOperation.fulfilled, (state, { payload }) => {
      //   state.tasks[state.indexCurrentDay].push(payload);
      //   state.error = null;
      //   state.isLoading = false;
      // })
      // .addCase(addTaskOperation.rejected, (state, { payload }) => {
      //   state.error = payload;
      //   state.isLoading = false;
      // })
      .addCase(deleteEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEvent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currentEvent = null;
        state.events = state.events.filter(({ id }) => id !== payload);
      })
      .addCase(deleteEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
    // .addCase(editTaskOperation.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(editTaskOperation.fulfilled, (state, { payload }) => {
    //   const index = state.tasks[state.indexCurrentDay].findIndex(
    //     (task) => task._id === payload._id
    //   );
    //   if (index !== -1) {
    //     state.tasks[state.indexCurrentDay][index] = payload;
    //   }
    //   state.isLoading = false;
    //   state.error = null;
    // })
    // .addCase(editTaskOperation.rejected, (state, { payload }) => {
    //   state.error = payload;
    //   state.isLoading = false;
    // });
  },
});

// export const {
//   getAllEvents,

//   // addIndexCurrentDay,
//   // addChoosedDay,
//   // clearTasks,
// } = eventSlice.actions;

export const eventReducer = eventSlice.reducer;

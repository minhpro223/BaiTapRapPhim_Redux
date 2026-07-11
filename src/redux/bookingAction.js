import {
  SET_USER,
  START_SELECT,
  SELECT_SEAT,
  CONFIRM_BOOKING,
} from "./bookingType";

export const setUserAction = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const startSelectAction = () => {
  return {
    type: START_SELECT,
  };
};

export const selectSeatAction = (payload) => {
  return {
    type: SELECT_SEAT,
    payload,
  };
};

export const confirmBookingAction = () => {
  return {
    type: CONFIRM_BOOKING,
  };
};
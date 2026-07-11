import {
  SET_USER,
  START_SELECT,
  SELECT_SEAT,
  CONFIRM_BOOKING,
} from "./bookingType";

const initialState = {
  name: "",

  numberSeat: 0,

  isStart: false,

  listSeatSelected: [],

  listBooking: [],
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        name: action.payload.name,
        numberSeat: Number(action.payload.numberSeat),
      };
    }

    case START_SELECT: {
      return {
        ...state,
        isStart: true,
        listSeatSelected: [],
      };
    }

    case SELECT_SEAT: {
      let newList = [...state.listSeatSelected];

      let index = newList.findIndex(
        (item) => item.soGhe === action.payload.soGhe
      );

      if (index !== -1) {
        newList.splice(index, 1);
      } else {
        if (newList.length >= state.numberSeat) {
          alert(
            `Bạn chỉ được chọn ${state.numberSeat} ghế`
          );
          return state;
        }

        newList.push(action.payload);
      }

      return {
        ...state,
        listSeatSelected: newList,
      };
    }

    case CONFIRM_BOOKING: {
      if (state.listSeatSelected.length !== state.numberSeat) {
        alert("Chưa chọn đủ số ghế");
        return state;
      }

      const booking = {
        name: state.name,
        numberSeat: state.numberSeat,
        seats: state.listSeatSelected,
      };

      return {
        ...state,
        listBooking: [...state.listBooking, booking],
        listSeatSelected: [],
        isStart: false,
        name: "",
        numberSeat: 0,
      };
    }

    default:
      return state;
  }
};
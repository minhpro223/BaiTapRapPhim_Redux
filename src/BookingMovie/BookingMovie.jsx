import "./BaiTapBookingTicket.css";
import danhSachGhe from "./danhSachGhe.json";

import { useDispatch, useSelector } from "react-redux";

import {
  setUserAction,
  startSelectAction,
} from "../redux/bookingAction";

import ListSeat from "./ListSeat";
import SelectedSeat from "./SelectedSeat";

export default function BookingMovie() {
  const dispatch = useDispatch();

  const { name, numberSeat } = useSelector(
    (state) => state.bookingReducer
  );

  const handleChange = (e) => {
    dispatch(
      setUserAction({
        name:
          e.target.name === "name"
            ? e.target.value
            : name,

        numberSeat:
          e.target.name === "numberSeat"
            ? e.target.value
            : numberSeat,
      })
    );
  };

  const handleStart = () => {
    if (name.trim() === "") {
      alert("Nhập tên");
      return;
    }

    if (numberSeat <= 0) {
      alert("Nhập số ghế");
      return;
    }

    dispatch(startSelectAction());
  };

  return (
    <div
      className="bookingMovie"
      style={{
        backgroundImage: "url('./img/bgmovie.jpg')",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,.75)",
          minHeight: "100vh",
        }}
      >
        <div className="container py-5">

          <h3 className="text-warning mb-5">
            Fill The Required Details Below And Select Your Seats
          </h3>

          <div className="row mb-4">

            <div className="col-md-6">

              <label className="text-white mb-2">
                Name
              </label>

              <input
                className="form-control"
                name="name"
                value={name}
                onChange={handleChange}
              />

            </div>

            <div className="col-md-4">

              <label className="text-white mb-2">
                Number of Seats
              </label>

              <input
                type="number"
                className="form-control"
                name="numberSeat"
                value={numberSeat}
                onChange={handleChange}
              />

            </div>

          </div>

          <button
            className="btn btn-light mb-5"
            onClick={handleStart}
          >
            Start Selecting
          </button>

          <div className="row">

            <div className="col-lg-8 text-center">

              <div className="mb-4">

                <span className="gheDangChon me-3"></span>

                <span className="text-white me-4">
                  Selected Seat
                </span>

                <span className="gheDuocChon me-3"></span>

                <span className="text-white me-4">
                  Reserved Seat
                </span>

                <span className="ghe me-3"></span>

                <span className="text-white">
                  Empty Seat
                </span>

              </div>

              <div className="screen mx-auto mb-5">
                SCREEN THIS WAY
              </div>

              <ListSeat
                danhSachGhe={danhSachGhe}
              />

            </div>

            <div className="col-lg-4">

              <SelectedSeat />

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
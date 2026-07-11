import { useDispatch, useSelector } from "react-redux";
import { confirmBookingAction } from "../redux/bookingAction";

export default function SelectedSeat() {
  const dispatch = useDispatch();

  const {
    listSeatSelected,
    listBooking,
    name,
    numberSeat,
  } = useSelector((state) => state.bookingReducer);

  const totalPrice = listSeatSelected.reduce(
    (tong, ghe) => tong + ghe.gia,
    0
  );

  return (
    <div className="booking-info text-white">

      <h3 className="mb-4">
        Selected Seats
      </h3>

      <table className="table table-bordered text-white">

        <thead>

          <tr>

            <th>Seat</th>

            <th>Price</th>

          </tr>

        </thead>

        <tbody>

          {listSeatSelected.map((seat) => (
            <tr key={seat.soGhe}>

              <td>{seat.soGhe}</td>

              <td>{seat.gia.toLocaleString()} đ</td>

            </tr>
          ))}

        </tbody>

        <tfoot>

          <tr>

            <td>Total</td>

            <td>{totalPrice.toLocaleString()} đ</td>

          </tr>

        </tfoot>

      </table>

      <button
        className="btn btn-success w-100 mb-5"
        onClick={() => dispatch(confirmBookingAction())}
      >
        Confirm Selection
      </button>

      <h3 className="mb-3">
        Booking List
      </h3>

      <table className="table table-dark table-bordered">

        <thead>

          <tr>

            <th>Name</th>

            <th>Number Of Seats</th>

            <th>Seats</th>

          </tr>

        </thead>

        <tbody>

          {listBooking.map((booking, index) => (

            <tr key={index}>

              <td>{booking.name}</td>

              <td>{booking.numberSeat}</td>

              <td>

                {booking.seats.map((seat) => seat.soGhe).join(", ")}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
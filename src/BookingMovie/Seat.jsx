import { useDispatch, useSelector } from "react-redux";
import { selectSeatAction } from "../redux/bookingAction";

export default function Seat(props) {
  const { ghe } = props;

  const dispatch = useDispatch();

  const {
    listSeatSelected,
    isStart,
  } = useSelector((state) => state.bookingReducer);

  let classGhe = "ghe";

  // Ghế đã đặt
  if (ghe.daDat) {
    classGhe = "gheDuocChon";
  }

  // Ghế đang chọn
  const index = listSeatSelected.findIndex(
    (item) => item.soGhe === ghe.soGhe
  );

  if (index !== -1) {
    classGhe = "gheDangChon";
  }

  const handleSelectSeat = () => {
    if (!isStart) {
      alert("Vui lòng nhập thông tin và nhấn Start Selecting");
      return;
    }

    if (ghe.daDat) return;

    dispatch(selectSeatAction(ghe));
  };

  return (
    <button
      className={classGhe}
      disabled={ghe.daDat}
      onClick={handleSelectSeat}
    >
      {ghe.soGhe}
    </button>
  );
}
import SeatRow from "./SeatRow";

export default function ListSeat(props) {
  const { danhSachGhe } = props;

  return (
    <>
      {danhSachGhe.map((hangGhe, index) => (
        <SeatRow
          key={index}
          hangGhe={hangGhe}
          soHang={index}
        />
      ))}
    </>
  );
}
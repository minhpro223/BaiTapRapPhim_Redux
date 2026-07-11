import Seat from "./Seat";

export default function SeatRow(props) {
  const { hangGhe, soHang } = props;

  return (
    <div className="mb-2">

      <span className="firstChar">
        {hangGhe.hang}
      </span>

      {hangGhe.danhSachGhe.map((ghe, index) => {

        if (soHang === 0) {
          return (
            <button
              key={index}
              className="rowNumber"
            >
              {ghe.soGhe}
            </button>
          );
        }

        return (
          <Seat
            key={index}
            ghe={ghe}
          />
        );
      })}
    </div>
  );
}
import Phone from "./phone";

export default function ListPhone(props) {
  const renderListPhone = ()=>{
    const {listPhone,onDetailPhone} = props;
    return listPhone.map((phone)=><Phone key={phone.maSP} phone={phone} onDetailPhone={onDetailPhone}/>);
  }
    return (
    <div className="grid grid-cols-3 gap-4">
      {renderListPhone()}
    </div>
  );
    
  
}

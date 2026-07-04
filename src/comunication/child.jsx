export default function ChildCompoment(props) {
  console.log(props);
  return (
    <div>
      <h1>ChildCompoment</h1>

      <p>Username : {props.username} </p>
      <button onClick={()=>props.onHandleResetUsername("Minh Nguyen")} className="text-white bg-red-500 box-border px-4 py-2.5">
        Reset Username
      </button>

      <p>Age : {props.age} </p>
    </div>
  );
}

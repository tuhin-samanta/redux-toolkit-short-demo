import { useSelector, useDispatch } from "react-redux";
import { doIncrement, doDecrement } from "../store/slices/counter.slice";

export default function Counter() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(doDecrement(5));
        }}
      >
        -
      </button>
      <h5>{counter.current}</h5>
      <button
        onClick={() => {
          dispatch(doIncrement(5));
        }}
      >
        +
      </button>
    </>
  );
}

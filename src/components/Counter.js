import Button from "./Button";
import useCounter from "../hooks/use-counter";

function Counter({ intCount }) {
  const { count, increment } = useCounter(intCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button secondary rounded onClick={increment}>
        Increment
      </Button>
    </div>
  );
}
export default Counter;

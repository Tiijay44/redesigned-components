import { useEffect, useState } from "react";

function useCounter(intCount) {
  const [count, setCount] = useState(intCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return {
    count,
    increment,
  };
}
export default useCounter;

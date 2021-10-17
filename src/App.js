import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  const countUp = () => setCount(count + 1)
  const countDown = () => setCount(count - 1)
  const countUp2 = () => setCount(precount => precount + 1)
  const countReset = () => setCount(0)
  const count2 = () => setCount(count * 2)
  const count3 = () => setCount(precount => {
    return precount % 3 === 0 ? precount / 3 : precount })
  
  return (
    <>
      <div>count:{count}</div>
      <div>
        <button onClick={countUp}>+1</button>
        <button onClick={countDown}>-1</button>
      </div>
      <div>
        <button onClick={countUp2}>+1</button>
      </div>
      <button onClick={countReset}>Reset</button>
      <button onClick={count2}>×2</button>
      <button onClick={count3}>3</button>
    </>
  );
}

export default App;

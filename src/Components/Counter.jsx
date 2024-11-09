import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called "count" and a function to update it called "setCount"
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Simple Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;

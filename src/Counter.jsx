import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

    return (
        <div className="card">
        <p className='text-2xl text-red-600 mb-5'>counting value {count}</p>
        <button className= 'pb-1 px-4 bg-fuchsia-900 text-xl text-fuchsia-200  border rounded-xl border-t-neutral-900' onClick={() => setCount((count) => count + 1)}>
        Increase
        </button>
        <button className= 'pb-1 px-4 shadow-md bg-fuchsia-900 text-xl text-fuchsia-200  border rounded-xl border-t-neutral-900' onClick={() => setCount((count) => count - 1)}>
        Decrease
        </button>
        <button className= 'pb-1 px-4 shadow-lg bg-fuchsia-900 text-xl text-fuchsia-200  border rounded-xl border-t-neutral-900' onClick={() => setCount((count) => count*0)}>
        Reset
        </button>
      </div>
    );
};

export default Counter;
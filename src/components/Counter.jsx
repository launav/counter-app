import Proptypes from 'prop-types'
import { useState } from 'react';


export const Counter = ({ valor }) => {

  const [count, setCount] = useState(valor);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(valor);
  }

  const handleDecrement = () => {

    if (count <= 0) return

    setCount(count - 1);


  };

  console.log('se ha montado counter')


  return (
    <div className='container'>

      <h2> Counter: {count}</h2>

      {
        count <= 0 ? <p>count es 0</p> : <p>count no es 0</p>
      }

      <button className='btn btn-dark'
        onClick={handleDecrement} disabled={count <= 0 ? true : false}>-1</button>

      <button className='btn btn-dark'
        onClick={handleReset}>reset</button>

      <button className='btn btn-dark'
        onClick={handleAdd}>+1</button>

    </div >
  )
};

Counter.proptypes = {
  valor: Proptypes.number.isRequired
};

Counter.defaultProps = {
  valor: 5
};


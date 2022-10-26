import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/actions';

function App() {

  const dispatch = useDispatch();
  const { counter } = useSelector(state => state.counter);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default App;

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  return (
    <div className="App">

      <div style={{ fontWeight: "bold", marginBottom: "20px" }}>Cash: {cash}</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
        <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
      </div>
    </div>
  );
}

export default App;

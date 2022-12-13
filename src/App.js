import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {

    const customer = {
      name,
      id: Date.now()
    }

    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">

      <div style={{ fontWeight: "bold", marginBottom: "20px" }}>Cash: {cash}</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
        <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
        <button onClick={() => addCustomer(prompt())}>ADD CUSTOMER</button>
        <button onClick={() => getCash(Number(prompt()))}>DELETE CUSTOMER</button>
      </div>

      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          )}
        </div>
        :
        <div style={{ marginTop: "10px" }}>
          No clients
        </div>}
    </div>
  );
}

export default App;

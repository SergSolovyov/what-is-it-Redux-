import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';
import { asyncDecrementCreator, AsyncIncrementCreator, decrementCreator, incrementCreator } from './store/countReducer';
import { fetchUsers } from './store/userReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  const count = useSelector(state => state.count.count);
  const users = useSelector(state => state.users.users);
  console.log(users)
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
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
        <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
        <button onClick={() => addCustomer(prompt())}>ADD CUSTOMER</button>
        <button onClick={() => getCash(Number(prompt()))}>DELETE CUSTOMER</button>
        <button onClick={() => dispatch(fetchCustomers())}>GET CUSTOMERS FROM THE BASE</button>
        <button onClick={() => dispatch(AsyncIncrementCreator())}>INCREMENT</button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>DECREMENT</button>
        <button onClick={() => dispatch(fetchUsers())}>GET USERS</button>
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

      <h2>Count :</h2>
      <div>{count}</div>

      <h2>Users :</h2>
      {users.length > 0 ?
        <div>
          {users.map(user =>
            <div>{user.name}</div>)}
        </div>
        :
        <div>No users</div>}
    </div>
  );
}

export default App;

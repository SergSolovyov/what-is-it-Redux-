Redux - library for work with state application (data store)
![](../../Screenshot_1.png)
![](../../Screenshot_2.png)
1. Install redux react-redux
2. Create store "const store = createStore()"
3. Create `reducer`, which takes `state` and `action`
4. Inside reducer, create switch which takes `action.type` and switch default return state
5. Create `defaultState` which we assign to the state in the reducer
6. Create cases inside reducer. Each case should return `{...state, cash: state.cash + action.payload}` for example
7. Transfer reducer to store 
8. `Wrapping` the `</App>` component with the `<Provider> from 'react-redux'` and the provider accepts the `storage` as a parameter
9. Inside </App> component => To `change the state` we need a `dispatch` which we get with the hook `useDispatch()`
10. To get state we need call hook useSelector(state => state.cash)
11. `Create functions for change our state` that is cash. In our example these functions are called addCash() and getCash(). 
12. Inside each function we call `dispatch` and `assign to dispatch action` like this  dispatch({ type: "ADD_CASH", payload: 5 })

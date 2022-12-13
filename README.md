Redux - library for work with state application (data store)
![](../../Screenshot_1.png)
![](../../Screenshot_2.png)

# PART 1
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

# PART 2
## Working with multiple reducers

1. Create new reducer called `customerReducer` with `action.type`'s `ADD_CUSTOMER` and `GET_CUSTOMERS`
2. Refactoring code: create new folder called store/index.js, move the store inside store/index.js
3. For each reducer create new file 'store/cashReducer.js' and 'store/customerReducer.js', then move code created reducers inside index.js to new's files
4. `Combine` our two `reducers` => inside store/index.js create rootReducer=combineReducers({'is here our reducers'}) `and then pass rootReducer to store`
5. npm i @redux-devtools/extension to keep track of the state in the browser and `redux devtools extension for the browser` and then add function composeWithDevTools() to createStore() inside store/index.js


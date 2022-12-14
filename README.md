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

# PART 3
## work with array
1. inside </App> `get customers` with hook useSelector and `create control add and delete `customer inside App
2. Change customerReducer
3. create func addCustomer(name) inside App
4. creat func removeCustomer()
5. add logic remove customer inside customerReducer
6. Refactoring: create constant action.type and create func action creator
7. replace dispath with our new's functions actionCreators

# PART 4
## asynchronous

1. npm i redux-thunk
2. add applyMiddleware(thunk) to composeWithDevTools inside store/index.js
3. create new action `ADD_MANY_CUSTOMERS` inside customerReducer
4. create folder `asyncActions/customers.js`
5. creat func fetchCustomers which return another func which should return dispatch with func `action-creators`
6. add button in App with `onClick{() => dispatch(fetchCustomers())}`

# PART 5
## redux saga

1. Redux saga contains three basic concepts: `Workers, Watchers, Effects`
2. Create new two reducers, actionCreators and combine to rootReducer
3. Create new folder saga, create './saga' => 'index.js', 'countSaga.js', 'userSaga.js'
4. Inside countSaga.js create `incrementWorker` and 'decrementWorker' and create 'countWatcher';
5. npm i redux-saga
6. import put from 'redux-saga/effects'. `put` that is like `dispatch`
7. import takeEvery that is `watcher`
8. inside watcher called 'countWatcher' yield `takeEvery(type, worker)`
9. add sagaMiddleware inside applyMiddleware in our store
10. sagaMiddleware.run(watcher)
11. create worker, watcher for fetchUsers as in the example before
12. inside 'saga/index.js' create global watcher for combine countWatcher and userWatcher
13. inside 'store/index.js' assign rootWatcher to sagaMiddleware

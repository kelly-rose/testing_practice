import {createStore, combineReducers, applyMiddleware} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import {createLogger} from 'redux-logger';

export default () => {
    const logger = createLogger();
    const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),applyMiddleware(logger)
  );

  return store;
};

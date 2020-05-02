import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import {name as appName} from '../../app.json';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  blacklist: [],
  whitelist: ['setting'],
  keyPrefix: appName,
  storage: AsyncStorage,
};

const middlewares = [thunkMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares)),
    // composeWithDevTools(applyMiddleware(...middlewares)),
  );

  let persistor = persistStore(store);
  return {store, persistor};
};

import {combineReducers} from 'redux';
import settingReducers from './setting';
import BooksReducers from './book';

export default combineReducers({
  setting: settingReducers,
  books: BooksReducers,
});

import {combineReducers} from 'redux';
import settingReducers from './setting';

export default combineReducers({
  setting: settingReducers,
});

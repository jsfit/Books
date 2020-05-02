import * as ACTION_TYPES from '@Constants';
import {Book as InitState} from '@Models';

export default (state = InitState, action) => {
  const {type, payload, error} = action;
  switch (type) {
    case ACTION_TYPES.GET_BOOKS:
      return payload;

    default:
      return state;
  }
};

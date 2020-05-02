import * as ACTION_TYPES from '@Constants';

import {Setting} from '@Models';

export default (state = Setting, action) => {
  const {type, payload, error} = action;
  switch (type) {
    case ACTION_TYPES.TERM_AND_CONDITIONS:
      return {
        ...state,
        isTermAccepted: payload,
      };
      break;

    case ACTION_TYPES.SETTING_SOUND:
      return {
        ...state,
        isSound: payload,
      };
      break;

    case ACTION_TYPES.SETTING_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
      break;

    case ACTION_TYPES.PAID_USER:
      return {
        ...state,
        isPaid: payload,
      };
      break;

    case ACTION_TYPES.DOWNLOAD_STATUS:
      return {
        ...state,
        isFreeDataDownload: payload,
      };
      break;

    case ACTION_TYPES.SUbSCRIPTION_RECEIPT_SET:
      return {
        ...state,
        IAPReceipt: payload,
      };
      break;

    default:
      return state;
  }
};

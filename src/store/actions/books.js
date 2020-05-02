import * as ACTION_TYPES from '@Constants';
import firestore from '@react-native-firebase/firestore';

export const getAllBooks = () => {
  return dispatch => {
    firestore()
      .collection('Books')
      .get()
      .then(querySnapshot => {
        // console.log('Total users: ', querySnapshot.size);
        dispatch({
          type: ACTION_TYPES.GET_BOOKS,
          payload: querySnapshot,
        });
      });
  };
};

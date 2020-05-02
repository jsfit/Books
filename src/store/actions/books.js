import * as ACTION_TYPES from '@Constants';
import firestore from '@react-native-firebase/firestore';

export const getAllBooks = () => {
  return dispatch => {
    firestore()
      .collection('books')
      .get()
      .then(querySnapshot => {
        console.log('Total books: ', querySnapshot);
        let data = [];
        querySnapshot.forEach(documentSnapshot => {
          data.push(documentSnapshot.data());
        });

        dispatch({
          type: ACTION_TYPES.GET_BOOKS,
          payload: data,
        });
      });
  };
};

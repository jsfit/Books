import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getAllBooks} from '@Actions';
import {BooksCarousel} from '@Components';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const MainScreen = props => {
  console.log(props.books);
  return (
    // <SafeAreaView style={{flex: 1}}>
    <View
      style={{
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'column-reverse',
      }}>
      {/* <View> */}
      <BooksCarousel />
      {/* </View> */}
    </View>
  );
};
const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAllBooks: () => {
      dispatch(getAllBooks());
    },
  };
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);

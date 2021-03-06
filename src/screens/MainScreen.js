import React from 'react';
import {connect} from 'react-redux';
import {getAllBooks} from '@Actions';
import {BooksCarousel} from '@Components';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Segment,
  Content,
  Text,
} from 'native-base';
import {hp, wp} from '@UI/percentage';

const MainScreen = props => {
  console.log(props);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#2c3e50',
      }}>
      <Header style={{backgroundColor: '#2c3e50'}} hasSegment>
        <Left />
        <Body>
          <Text
            style={{
              color: 'white',
              fontSize: wp(6),
              marginLeft: wp(12),
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            BooksMart
          </Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
      <View>
        <BooksCarousel
          books={props.books}
          onPress={item =>
            props.navigation.navigate('BookDetailScreen', {item: item})
          }
        />
      </View>
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

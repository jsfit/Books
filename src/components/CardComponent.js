import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Right,
  CardItem,
  ListItem,
  Text,
  Button,
  View,
  Left,
  Body,
} from 'native-base';
import {hp, wp} from '@UI/percentage';
export default class CardComponent extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#030303',
        }}>
        <ImageBackground
          source={require('../assets/images/ertugral.jpg')}
          style={{width: wp(100), height: hp(60)}}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: wp(5),
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: 'white',
                fontSize: wp(8),
                fontWeight: 'normal',
                fontWeight: 'bold',
              }}>
              Sultan Salahudeen Ayubi
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: wp(4),
                fontWeight: 'bold',
              }}>
              Sultan Salahudeen Ayubi. 1137 - 1193. 5 Volume PDF. This book tell
              us the true worior of islam. Kindly read this book and enjoy it.
              Sultan Salahudeen Ayubi. 1137 - 1193. 5 Volume PDF.
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.tableWrapper}>
          <View style={styles.table}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title1}>Author</Text>
              <Text style={styles.title2}>Aslam Rahi</Text>
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title1}>Publish Date</Text>
              <Text style={styles.title2}>11-FEb-98</Text>
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title1}>Volumes</Text>
              <Text style={styles.title2}>34</Text>
            </View>
          </View>

          <Button block danger style={styles.readBookBt}>
            <Text>Read Book</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  table: {
    flexDirection: 'row',
    paddingVertical: hp(1),
    justifyContent: 'space-evenly',
  },
  tableWrapper: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  titleWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title1: {
    fontSize: wp(5),
    color: 'white',
  },
  title2: {
    fontSize: wp(3),
    color: 'white',
  },
  readBookBt: {
    width: wp(80),
    alignSelf: 'center',
  },
});

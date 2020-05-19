import React, {Component} from 'react';
import {ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {Container, Header, Text, Button, View} from 'native-base';
import {hp, wp} from '@UI/percentage';

export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      bookDetail: props.data.item,
    };
    console.log(props);
  }

  render() {
    const {bookDetail} = this.state;
    let ImageUrl = {uri: bookDetail.thumbnail};
    return (
      <Container
        style={{
          backgroundColor: '#2c3e50',
        }}>
        <Header
          style={{
            backgroundColor: '#2c3e50',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: wp(6),
              padding: wp(3),
              fontWeight: 'bold',
            }}>
            {bookDetail.author}
          </Text>
        </Header>
        <ImageBackground
          resizeMode="stretch"
          source={ImageUrl}
          style={{
            width: wp(100),
            height: hp(60),
          }}>
          <View
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'black',
              opacity: 0.3,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: wp(8),
            }}>
            <Button block style={styles.readBookBt}>
              <Text>Read Book</Text>
            </Button>
            <Text
              style={{
                color: 'white',
                fontSize: wp(4),
                fontWeight: 'bold',
              }}>
              {bookDetail.description}
            </Text>
          </View>
        </ImageBackground>
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                width: '55%',
                color: 'white',
                fontSize: wp(5),
                padding: wp(6),
              }}>
              {'Author'}
            </Text>
            <Text numberOfLines={5} style={{color: 'white', fontSize: wp(5), padding: wp(5), width: wp(40)}}>
              {bookDetail.author}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                width: '55%',
                color: 'white',
                fontSize: wp(5),
                padding: wp(6),
              }}>
              {'Total Volumes'}
            </Text>
            <Text style={{color: 'white', fontSize: wp(5), padding: wp(5)}}>
              {bookDetail.totalVolumes}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                width: '55%',
                color: 'white',
                fontSize: wp(5),
                padding: wp(6),
              }}>
              {'Publisher'}
            </Text>
            <Text style={{color: 'white', fontSize: wp(5), padding: wp(5)}}>
              {bookDetail.publishedAt}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                width: '55%',
                color: 'white',
                fontSize: wp(5),
                padding: wp(6),
              }}>
              {'Others'}
            </Text>
            <Text style={{color: 'white', fontSize: wp(5), padding: wp(5)}}>
              {'AnyThing'}
            </Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  readBookBt: {
    backgroundColor: '#34495e',
    width: wp(40),
    alignSelf: 'center',
    bottom: wp(5),
  },
  scrollView: {
    backgroundColor: '#34495e',
    marginVertical: 20,
    borderRadius: 20,
    left: wp(5),
    width: wp(90),
  },
});

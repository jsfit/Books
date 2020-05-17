import React, {Component} from 'react';
import {ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Text,
  Button,
  View,
} from 'native-base';
import {hp, wp} from '@UI/percentage';

export default class CardComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    console.log(props)
  }

    
  render() {
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
              padding: wp(2),
              fontWeight: 'bold',
            }}>
            Sultan Salahudeen Ayubi
          </Text>
        </Header>
        <ImageBackground
          source={require('../assets/images/ertugral.jpg')}
          style={{
            width: wp(100),
            height: hp(60),
          }}>
          <View
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'black',
              opacity: 0.5,
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
              Sultan Salahudeen Ayubi. 1137 - 1193. 5 Volume PDF. This book tell
              us the true worior of islam. Kindly read this book and enjoy it.
              Sultan Salahudeen Ayubi. 1137 - 1193. 5 Volume PDF. Sultan
              Salahudeen Ayubi. 1137 - 1193. 5 Volume PDF.
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
            <Text style={{color: 'white', fontSize: wp(5), padding: wp(5)}}>
            {this.props.data.item[0].author}
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
              {'5'}
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
              {'11-09-1998'}
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

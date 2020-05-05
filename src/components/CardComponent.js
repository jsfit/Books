import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Header,
  Text,
  Button,
  View,
  CardItem,
  Body,
  Right,
  Left
} from 'native-base';
import {hp, wp} from '@UI/percentage';

export default class CardComponent extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#2c3e50',
        }}>
        <Header 
        style={{
          backgroundColor: "#2c3e50"
        }}>
          <Text 
            style={{ 
              color: "white", 
              fontSize: wp(7), 
              padding: wp(3), 
              fontWeight: "bold"
            }}>
            Sultan Salahudeen Ayubi
          </Text>
        </Header>
        <ImageBackground
          source={require('../assets/images/ertugral.jpg')}
          style={{width: wp(100), height: hp(60)}}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: wp(8),
            }}>
            <Button block style={styles.readBookBt}>
              <Text>
                Read Book
              </Text>
            </Button>
            <Text
              style={{
                color: 'white',
                fontSize: wp(4),
                fontWeight: 'bold',
              }}>
              Sultan Salahudeen Ayubi. 1137 - 1193. 5 Volume PDF. This book tell
              us the true worior of islam. Kindly read this book and enjoy it.
              Sultan Salahudeen Ayubi. 1137 - 1193. 5 Volume PDF.
              Sultan Salahudeen Ayubi. 1137 - 1193. 5 Volume PDF.
            </Text>
        
          </View>
        </ImageBackground>
        <Content style={{ padding: wp(5)}}>
          <CardItem style={{ backgroundColor: "#34495e", borderRadius: 20}}>
              <Body>
                <Text style={{ 
                  color: "white",
                  fontSize: wp(5),
                  paddingTop: wp(5)
                  }}>
                  Author 
                </Text>
                <Text style={{ 
                  color: "white",
                  fontSize: wp(5),
                  paddingTop: wp(5)
                  }}>
                  Total Volume
                </Text>
                <Text style={{ 
                  color: "white",
                  fontSize: wp(5),
                  paddingTop: wp(5)
                }}>
                  Publisher
                </Text>
                <Text style={{ 
                  color: "white",
                  fontSize: wp(5),
                  paddingTop: wp(5)
                }}>
                  Other
                </Text>
              </Body>
              <Body style={{ paddingLeft: wp(20)}}>
                <Text style={{ 
                  color: "white",
                  fontSize: wp(5),
                  paddingTop: wp(5)
                  }}>
                  Aslam Rahi
                </Text>
                <Text style={{ 
                  color: "white",
                  fontSize: wp(5),
                  paddingTop: wp(5)
                  }}>
                  5
                </Text>
                <Text style={{ 
                  color: "white",
                  fontSize: wp(5),
                  paddingTop: wp(5)
                }}>
                  11-09-1998
                </Text>
                <Text style={{ 
                  color: "white",
                  fontSize: wp(5),
                  paddingTop: wp(5)
                }}>
                  Other
                </Text>
              </Body>
          </CardItem>
        </Content>
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
    backgroundColor: "#2980b9",
    width: wp(40),
    alignSelf: 'center',
    bottom: wp(5)
  },
});




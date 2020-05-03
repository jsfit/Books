import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


export default class CardComponent extends Component {
  render() {
    return (
      <Container style={{ width: 340, paddingTop: 150, paddingLeft: 30  }}>
        <Content>
          <Card style={{flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/dp.jpg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../assets/images/main.png')} style={{height: 200, width: 280, flex: 1}}/>
                <Text style={{ paddingTop: 20 }}>
                  Sultan Salahudeen Ayubi.
                  1137 - 1193.
                  5 Volume PDF.
                  This book tell us the true worior of islam.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
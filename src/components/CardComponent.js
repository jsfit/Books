import React, {Component} from 'react';
import {Image} from 'react-native';
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

export default class CardComponent extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#030303" }}>
        <Content>
              <Body>
                <Image
                  source={require('../assets/images/ertugral.jpg')}
                  style={{ borderRadius: 8, maxWidth: 400, maxHeight: 500   }}
                />
                <Text style={{ position: "absolute", paddingRight: 120, bottom: 100, color: "white", fontSize: 32, fontWeight: "normal"  }}>
                  {/* Sultan Salahudeen Ayubi */}
                  Drillis Ertugral
                </Text>
                <Text style={{ position: "absolute", paddingLeft: 30, paddingRight: 20, top: 410, color: "white", fontSize: 16, fontWeight: "bold"  }}>
                  Sultan Salahudeen Ayubi. 1137 - 1193. 5 Volume PDF. This book
                  tell us the true worior of islam. Kindly read this book and enjoy it.
                  Sultan Salahudeen Ayubi. 1137 - 1193. 5 Volume PDF.
                </Text>
              </Body>
              <CardItem style={{ bottom: -20, backgroundColor: "Transparent" }}>
              <Left>
                <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
                  Aslam Rahi
                </Text>
              </Left>
              <Body>
                <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
                  11-02-1998
                </Text>
              </Body>
              <Right>
                <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
                  34
                </Text>
              </Right>
            </CardItem>
            <CardItem style={{ backgroundColor: "Transparent", top: 10 }}>
              <Left>
                <Text style={{ fontSize: 10, color: "white" }}>
                  Author
                </Text>
              </Left>
              <Body>
                <Text style={{ fontSize: 10, color: "white" }}>
                  Publish Date
                </Text>
              </Body>
              <Right>
                <Text style={{ fontSize: 10, color: "white" }}>
                  Total Volumes
                </Text>
              </Right>
            </CardItem>
            
        </Content>
        <Button block danger style={{ width: 300, bottom: 50, left: 30 }}>
          <Text>Read Book</Text>
        </Button>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class WritterBooks extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: "#2c3e50"}}>
          <Text style={{
            fontSize: 36,
            top: 20,
            fontWeight: "bold",
            color: "white" 
          }}>
            Aslam Rahi
          </Text>
        </Header>
        <Content style={{
            backgroundColor: "#2c3e50",
            top: 30
        }}>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/images/ertugral.jpg')} />
              </Left>
              <Body>
                <Text style={{ color: "white" }}>Sankhadeep</Text>
                <Text style={{ color: "white" }} note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{ color: "#2980b9" }}>Read Book</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/images/ertugral.jpg')} />
              </Left>
              <Body>
                <Text style={{ color: "white" }}>Sankhadeep</Text>
                <Text style={{ color: "white" }} note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{ color: "#2980b9" }}>Read Book</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/images/ertugral.jpg')} />
              </Left>
              <Body>
                <Text style={{ color: "white" }}>Sankhadeep</Text>
                <Text style={{ color: "white" }} note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{ color: "#2980b9" }}>Read Book</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/images/ertugral.jpg')} />
              </Left>
              <Body>
                <Text style={{ color: "white" }}>Sankhadeep</Text>
                <Text style={{ color: "white" }} note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{ color: "#2980b9" }}>Read Book</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/images/ertugral.jpg')} />
              </Left>
              <Body>
                <Text style={{ color: "white" }}>Sankhadeep</Text>
                <Text style={{ color: "white" }} note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{ color: "#2980b9" }}>Read Book</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/images/ertugral.jpg')} />
              </Left>
              <Body>
                <Text style={{ color: "white" }}>Sankhadeep</Text>
                <Text style={{ color: "white" }} note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{ color: "#2980b9" }}>Read Book</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/images/ertugral.jpg')} />
              </Left>
              <Body>
                <Text style={{ color: "white" }}>Sankhadeep</Text>
                <Text style={{ color: "white" }} note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{ color: "#2980b9" }}>Read Book</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
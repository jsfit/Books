import React, { Component } from 'react';
import {  Container, Header, Content, Text, View , Tab, Tabs } from 'native-base';
import {hp, wp} from '@UI/percentage';
import { Image } from 'react-native';

export default class WritterBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          writter: "example title 1",
          volumes: "example subtitle 1",
          name: "Salahudeen Ayubi "
        },
        {
          writter: "example title 2",
          volumes: "example subtitle 1",
          name: "Salahudeen Ayubi "
        },
        {
          writter: "example title 3",
          volumes: "example subtitle 1",
          name: "Salahudeen Ayubi "
        },
        {
          writter: "example title 4",
          volumes: "example subtitle 1",
          name: "Salahudeen Ayubi "
        },
        {
          writter: "example title 5",
          volumes: "example subtitle 1",
          name: "Salahudeen Ayubi "
        }
      ]
    };
  }




  render() {
    return (
      <Container>
        <Header style={{backgroundColor: "#2D3E50"}}>
          <Text style={{ fontSize: wp(6), top: wp(3), fontWeight: "bold", color: "white" }}>
            Books Mart
          </Text>
        </Header>
        <Tabs >
          <Tab heading="History" tabStyle={{ backgroundColor: '#2D3E50' }} activeTabStyle={{ backgroundColor: '#2D3E50' }}>
            <Content style={{ backgroundColor: "#2D3E50", top: hp(2) }}>
              <Text style={{ fontFamily: 'lucida grande', fontSize: wp(8), paddingLeft: wp(5), color: "white" }}>
                Aslam Rahi
              </Text>
              {this.state.array.map(element => (
              <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-evenly', alignIContent: 'stretch', paddingTop: hp(2), }}>
                <View style={{width: "45%", backgroundColor: 'white', borderRadius: 5, elevation: 5}}>
                  <Image 
                    source={require('../assets/images/ertugral.jpg')} 
                    style={{height: hp(16), width: null, flex: 1, borderTopLeftRadius: 5, borderTopRightRadius: 5}}
                  />
                  <Text numberOfLines ={1} style={{ fontFamily: 'lucida grande', fontSize: wp(3), color: "#34495E", paddingLeft: wp(2), paddingRight: wp(2)}}>Writter:   {element.writter}</Text>
                  <Text numberOfLines ={1} style={{ fontFamily: 'lucida grande', fontSize: wp(3), color: "#34495E", paddingLeft: wp(2), paddingRight: wp(2)}}>Volumes: {element.volumes} </Text>
                  <Text numberOfLines ={1} style={{ fontFamily: 'lucida grande', fontSize: wp(3), color: "#34495E", padding: wp(2)}}>{element.name}</Text>
                </View>
                <View style={{width: "45%", backgroundColor: 'white', borderRadius: 5, elevation: 5}}>
                  <Image 
                    source={require('../assets/images/ertugral.jpg')} 
                    style={{height: hp(16), width: null, flex: 1, borderTopLeftRadius: 5, borderTopRightRadius: 5}}
                  />
                  <Text numberOfLines ={1} style={{ fontFamily: 'lucida grande', fontSize: wp(3), color: "#34495E", paddingLeft: wp(2), paddingRight: wp(2)}}>Writter </Text>
                  <Text numberOfLines ={1} style={{ fontFamily: 'lucida grande', fontSize: wp(3), color: "#34495E", paddingLeft: wp(2), paddingRight: wp(2)}}>Volumes</Text>
                  <Text numberOfLines ={1} style={{ fontFamily: 'lucida grande', fontSize: wp(3), color: "#34495E", padding: wp(2)}}>sadf</Text>
                </View>
              </View>
              ))}

            </Content>
          </Tab>
          <Tab heading="Islamic"
              tabStyle={{ backgroundColor: '#2D3E50' }}
              activeTabStyle={{ backgroundColor: '#2D3E50'}}> 
          </Tab>
          <Tab heading="Novels"
              tabStyle={{ backgroundColor: '#2D3E50' }}
              activeTabStyle={{ backgroundColor: '#2D3E50' }}>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
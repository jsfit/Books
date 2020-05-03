import React, {Component} from 'react';
import {Container, Header, Text, Tab, Tabs} from 'native-base';
import {PDFOpen} from '@Components';
import {CardComponent} from '@Components';
import { BooksCarousel } from '@Components';


export default class TabScreen extends Component {

  render() {
    return (
      <Container>
        {/* <Header hasTabs /> */}
        <Tabs>
          <Tab heading="Tab1">
            {/* <Text>Thasdsad</Text> */}
            <CardComponent/>
          </Tab>
          <Tab heading="Tab2">
            {/* <Tab2 /> */}
            {/* <Text>Thasdsad</Text> */}
            <PDFOpen />
          </Tab>
          <Tab heading="Tab3">
            {/* <Tab3 /> */}
            <BooksCarousel/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

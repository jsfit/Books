import React, {Component} from 'react';
import {Container, Header, Text, Tab, Tabs} from 'native-base';
// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';
import {PDFOpen} from '@Components';
export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        {/* <Header hasTabs /> */}
        <Tabs>
          <Tab heading="Tab1">
            <Text>Thasdsad</Text>
          </Tab>
          <Tab heading="Tab2">
            {/* <Tab2 /> */}
            {/* <Text>Thasdsad</Text> */}
            <PDFOpen />
          </Tab>
          <Tab heading="Tab3">
            {/* <Tab3 /> */}
            <Text>Thasdsazsdad</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

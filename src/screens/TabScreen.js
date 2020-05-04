import React, {Component} from 'react';
import {Container, Header, Text, Tab, Tabs} from 'native-base';
import {BooksCarousel, CardComponent, PDFOpen} from '@Components';

export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <CardComponent />
      </Container>
    );
  }
}

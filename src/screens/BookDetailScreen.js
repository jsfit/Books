import React, {Component} from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Button } from 'native-base';
import { BooksCarousel, CardComponent, PDFOpen, WritterBooks } from '@Components';

export default class BookDetailScreen extends Component {
  render() {
    return (
      <Container>
        <Text onPress={() => this.props.navigation.navigate('TabScreen')}>Huzam</Text>
      </Container>  
    );
  }
}

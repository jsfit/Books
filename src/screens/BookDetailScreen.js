import React, {Component} from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Button } from 'native-base';
import { BooksCarousel, CardComponent, PDFOpen, WritterBooks } from '@Components';

export default class BookDetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  
  render() {
    console.log(this.props.route.params.item[0])
    return (
      <Container>
        <CardComponent data={this.props.route.params}/>
      </Container>
    );
  }
}

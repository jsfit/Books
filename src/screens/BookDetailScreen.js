import React, {Component} from 'react';
import {Container} from 'native-base';
import {CardComponent} from '@Components';

export default class BookDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    return (
      <Container>
        <CardComponent data={this.props.route.params} />
      </Container>
    );
  }
}

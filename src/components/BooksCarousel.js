import * as React from 'react';
import {SliderEntry} from '@UI';

export default class BooksCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    console.log(this.props.books)
    return <SliderEntry data={this.props.books} onPress={this.props.onPress} />;
  }
}

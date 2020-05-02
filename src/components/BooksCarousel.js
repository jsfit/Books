import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class BooksCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'red',
          borderRadius: 20,
          height: 250,
          padding: 50,
          marginLeft: 25,
        //   marginRight: 25,
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel
          layout={'default'}
          ref={ref => (this.carousel = ref)}
          data={this.props.carouselItems}
          sliderWidth={300}
          itemWidth={400}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({activeIndex: index})}
        />
      </View>
    );
  }
}

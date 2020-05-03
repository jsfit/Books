import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles from './styles/index.style';
import {ENTRIES1} from './static/entries';
const SLIDER_1_FIRST_ITEM = 1;

export default class SliderEntryComponent extends Component {
  constructor(props) {
    super(props);
  }

  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  render() {
    return (
      <Carousel
        ref={c => (this._slider1Ref = c)}
        data={this.props.data || ENTRIES1}
        renderItem={this._renderItemWithParallax}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        firstItem={SLIDER_1_FIRST_ITEM}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={styles.slider}
        // contentContainerCustomStyle={styles.sliderContentContainer}
      />
    );
  }
}

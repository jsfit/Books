import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {getAllBooks} from '@Actions';
// import NetInfo from '@react-native-community/netinfo';
// import * as CONSTANTS from '@Constants';
import {View, StatusBar} from 'react-native';
import {MainScreen} from './screens';
import {TabScreen} from './screens';

const Stack = createStackNavigator();

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
StatusBar.setHidden(true);

const BaseAppState = props => {
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      props.onGetAllBooks();
      firstUpdate.current = false;
      return;
    }
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // cardStyle: {backgroundColor: '#333333'},
          cardOverlayEnabled: false,
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
        headerMode="true">
        {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}

        {/* how i can run twi screens at a same time ..  yaha ma MainScreen or TabScreen dono ko akhata chalana chaata hon... zara yah commit kar dena */}
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    setting: state.setting,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAllBooks: () => {
      dispatch(getAllBooks());
    },
  };
};
const BaseApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseAppState);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const {persistor, store} = configureStore();
    this.persistor = persistor;
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <PersistGate persistor={this.persistor} loading={<LoadingView />}>
          <BaseApp />
        </PersistGate>
      </Provider>
    );
  }
}

const LoadingView = () => {
  return <View />;
};

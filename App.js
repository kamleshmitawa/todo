/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TodoList from './TodoList';

export default class App extends Component {
  render() {
    return (
      <View style={{ width:'100%', flex: 1}}>
        <TodoList />
      </View>
    );
  }
}

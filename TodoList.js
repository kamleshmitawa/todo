
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import ListInfo from './ListInfo';
import Header from './Header';
import AddButton from './AddButton';

export default class App extends Component {
  render() {
    return (
      <View style={{ width: '100%', position: 'relative', flex: 1 }}>
        <View style={{ marginTop: 40, backgroundColor: 'green', padding: 10, width: '100%', alignItems: 'center' }}>
          <Header />
        </View>
        <ScrollView>
          <View style={{ width: '100%'}}>
            <ListInfo />
          </View>
        </ScrollView>
        <View style={{ width: '100%', height: 300, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <AddButton />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1, 
    marginBottom: 100

  }

});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './Timer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Lets GO</Text>
        <Timer seconds={1*60} callback={()=>{alert('hi')}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

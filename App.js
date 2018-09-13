import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableHighlight } from 'react-native';
import Title from './Components/Title';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.ceria}>        
        <Text style={styles.judul}>Facebook</Text>
        <TextInput
        style={styles.huruf}
        placeholder='username'/>
        <TextInput
        style={styles.huruf}
        secureTextEntry={true}
        placeholder='password'
        maxLength={12}/>
        <Button
        onPress={this._onPressButton}
        title="Log In"
        color="#8b9dc3"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  judul:{
    height:40,
    color:'#dfe3ee'
  },
  huruf:{
    color:'#dfe3ee',
  },
  ceria: {
    flex: 1,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
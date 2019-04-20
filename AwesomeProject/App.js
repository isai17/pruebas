/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      
      server:  [
        { 
          name: 'isai',
           },
        {
          name: 'samuel'
        }
      ],
      initialServer: "",
      changed: false
    };
  };
  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.welcome}>Welcome to React Native! {"" + this.state.changed}</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <View>
          {
              this.state.server.map(function(value, i) {
                  return (
                    <View>
                      <TextInput
                        placeholder = "Type here to translate! "
                        value = {value.name}
                        onChangeText = {(text) => {
                          var narray = this.state.server.slice(0)
                          narray[i].name = text
                          var initialServer = this.state.initialServer || JSON.stringify(this.state.server)
                          var changed = (initialServer != JSON.stringify(narray))
                          this.setState({server: narray, changed: changed, initialServer: initialServer})                      
                        }}
                      />
                    </View>
                );
              }.bind(this))
          }
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

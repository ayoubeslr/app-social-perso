import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {Button, Input} from 'react-native-elements'

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state={
      pseudo: '',
      password: '',
      visible: true
    }
  }
  
  static navigationOptions = {
    title: 'Connexion',
  };
  render() {
    return (
      <View  style={styles.container}>
        <View style={styles.containerLogin}>
          <Input placeholder="Email ou @Pseudo"
          inputContainerStyle={styles.input}
          onChangeText={(text) => {
            this.setState({
              pseudo: text,
            })
          }}
          />
          <Input placeholder="Mot de passe"
          secureTextEntry={this.state.visible}
          inputContainerStyle={styles.input}
          onChangeText={(text) => {
            this.setState({
              password: text,
            })
          }}
          />
          <TouchableOpacity>
          <Text>Afficher le mot de passe</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.containerAccount}>
            <Text 
              style={styles.account}
              // onPress={() => this.setState({ visible: false})}
              >Mot de passe oublié ?</Text>
          </TouchableOpacity>
          <Button
          title="CONNEXION"
          type="clear"
          containerStyle={styles.button}
          titleStyle={{color: "#F6F200"}}
          onPress={this.handleClickSubmit}
            /> 
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    
  },
  containerLogin: {
    flex: 2,
    padding: 20,
    justifyContent: 'center',     
    alignItems: 'center',
  },
  input: {
    borderColor: '#000000',
    margin: 20
  },
  containerButton: {
    flexDirection: "row",
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderColor: "#000000",
    
  },
  button: {
    marginRight: 36,
  },
  containerAccount: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'center',
  },
  account: {
    color: '#F4B100',
    fontSize: 16
  },
});
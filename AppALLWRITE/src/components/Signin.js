import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {Button, Input} from 'react-native-elements'
import axios from 'axios'

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state={
      pseudo: '',
      password: '',
      visible: true
    }
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
  }
  
  static navigationOptions = {
    title: 'Connexion',
  };

  handleClickSubmit(){
    axios
      .get(
        "http:192.168.56.1:3001/users/connect?email=" +
          this.state.pseudo +
          "&password=" +
          this.state.password
      )
      .then(res => {
        if (res.data.status === "ok") {
          this.props.setSessionToken(res.data.token);
          this.props.navigation.push('Messenger')          
        }else{
          alert("no")
          
        }
      });
  }

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
          title="Connexion"
          type="clear"
          containerStyle={styles.button}
    
    titleStyle={{color:"#fff", borderRadius: 50 }}
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
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: "#f9f9f9",
    height: 50
  },
  button: {
    borderRadius: 20,
    marginRight: 36,
    backgroundColor: "#DC6700",
  },
  containerAccount: {
    alignItems: 'center',
  },
  account: {
    color: '#F4B100',
    fontSize: 16,
    marginRight: 36
  },
});
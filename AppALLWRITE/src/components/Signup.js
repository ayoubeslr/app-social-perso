import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import {Button, Input} from 'react-native-elements'
import axios from 'axios'
// // redux
// import { connect } from 'react-redux'
// import setSession from './../store/actions/setSession'


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      password: '',
      email: '',
      confirmPassword: '',
      visible: false,
      error: "",
      token: ""
    }
    this.handleClickSubmit = this.handleClickSubmit.bind(this)

  }
  
  static navigationOptions = {
    title: 'Inscription',
  };

  
  handleClickSubmit(){
    const { navigation } = this.props;
    const email = navigation.getParam('email', '');
    const {password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ error: "Les deux mots de passe ne correspondent pas" });
      return;
    }
    let url =
      "http:192.168.56.1:3001/users/subscribe?email=" +
      email +
      "&password=" +
      password +
      "&name=" +
      this.state.pseudo;
    axios.get(url).then(res => {
      let data = res.data;
      if (data.status === "ok") {
        this.props.navigation.push('Signin')
        alert(email)
      } else {
        this.setState({ error: "Une erreur s'est produite : " + data.message });
      }
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} >
        <View style={styles.containerInput}>
        <Input
            placeholder="@Pseudo"
            style={styles.email}
            onChangeText={(text) => {
              this.setState({
                pseudo: text,
              })
            }}
            />
            <Input
            placeholder="Mot de passe"
            secureTextEntry={true}
            style={styles.password}
            onChangeText={(text) => {
              this.setState({
                password: text,
              })
            }}
            />
            <Input
            placeholder="Confirmer le mot de passe"
            secureTextEntry={true}
            style={styles.confirmPassword}
            onChangeText={(text) => {
              this.setState({
                confirmPassword: text,
              })
            }}
            />
          </View>
          <View style={styles.containerAccount}>
          <Button
          title="CONTINUER"
          type="clear"
          containerStyle={styles.button}
          titleStyle={{color: "#58E891"}}
          onPress={this.handleClickSubmit}
            /> 
              <Text> Tu as déja un compte ? 
              <Text onPress={() => this.props.navigation.push('Signin')}
              style={styles.account}> Connecte toi</Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
    )
  }
}


export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',

  },
  containerInput: {
    flex: 3,
    padding: 20,
    justifyContent: 'space-evenly',      
    
  },
  containerButton: {
    flex: 1,
    justifyContent: 'center',      
    alignItems: 'center',
  },
  button: {
    height: "100%",      
    width: "100%",
    justifyContent: 'center',      
    alignItems: 'center',
  },
  containerAccount: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'center',
  },
  account: {
    color: '#58E891',
  },
});


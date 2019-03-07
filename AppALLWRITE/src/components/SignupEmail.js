import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import {Button, Input} from 'react-native-elements'

export default class SignupEmail extends Component {
    constructor(props) {
      super(props);
      this.state={
        email: '',
        visible: false,
        error: false, 
      }
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
    }

    static navigationOptions = {
      title: 'Inscription',
    };

    
    handleClickSubmit(){
      const { email } = this.state;
      if (!this.validateEmail(this.state.email)) {
        // not a valid email
        alert("ca passe pas")
        this.setState({error: false})
      } else {
        // valid email
        this.setState({error: true})
        this.props.navigation.push('Signin', { email: this.state.email })
      }
    }

    // vérification de l'adresse mail
    validateEmail(email){
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

    render() {
      return (
          <View style={styles.container}>
            {/* Title */}
            <View style={{justifyContent:'center', alignItems:"center"}}>
              <Text style={{fontSize: 20}}>Entrer votre adresse mail</Text>              
            </View>

            {/* Champ de saisi Email */}
            <Input
            placeholder="Email"
            keyboardType="email-address"
            maxLength={40}
            type="email"
            errorMessage={this.state.error ? "" : "Veuillez saisir une adresse valide"}
            errorStyle={{fontSize: 15}}
            required aria-required="true"
            onChangeText={(text) => {
              this.setState({
                email: text,
                visible: true
              })
            }}
            />
            
            {/* Bouton continuer */}
            <Button
              title="CONTINUER"
              disabled={this.state.email=='' ? true : false}
              disabledStyle={styles.button}
              disabledTitleStyle={{color: "#fff"}}
              errorMessage="eror"
              errorProps={this.props.errorMessages}
              buttonStyle={styles.pressButton}
              titleStyle={{color: "#fff"}}
              onPress={this.handleClickSubmit}
            />

            {/* Text */}
            <TouchableOpacity style={{justifyContent: "center", alignItems: 'center'}}>
              <Text style={{color: "#FE9200", fontSize:15, marginTop:20}}>S'inscrire avec numéro de telephone</Text>
            </TouchableOpacity>

            <View style={{position:'absolute',bottom:0, alignSelf:'center', marginBottom: 20 }}>
              <Text>Vous avez déjà un compte ?
              <Text onPress={()=>this.props.navigation.push('Home')} style={styles.account}> Connectez-vous</Text>
              </Text>
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
      padding: 30,

    },
    containerInput: {
      
    },
    button: {
      marginTop:10,
      backgroundColor:"#F9C882",

    },
    pressButton: {
      marginTop:10,
      backgroundColor: "#F08A00",
    },
    containerAccount: {
    },
    account: {
      color: '#FF9300',
    },
    disabled: {
      backgroundColor: "#000000"
    },
    buttonWrapper:{
      backgroundColor: "#AEFF00"
    },
  });
import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Button, Input} from 'react-native-elements'
import { Icon } from 'react-native-elements'

export default class SignupConfirmconfirmPassword extends Component {
    constructor(props) {
      super(props);
      this.state={
        confirmPassword: '',
        visible: false,
        error: false, 
        showButton: false,
        showIcon: false
      }
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
    }

    static navigationOptions = {
      title: 'Inscription',
    };

    handleClickSubmit(){
        const {confirmPassword } = this.state
        const { navigation } = this.props;
        const email = navigation.getParam('email', '');
        const name = navigation.getParam('name', '');
        const password = navigation.getParam('password', '');
        if (password == confirmPassword) {
            // not onfirmPassword
            this.setState({
                showButton: true,
                showIcon: true,
                error:false
            })
            alert("yes")
          }else{
            this.setState({
                showButton: false,
                showIcon: false,
                error: true
            })
          }
    }
    
    
    render() {
      return (
          <KeyboardAvoidingView style={styles.container}>

            {/* Title */}
            <View style={{justifyContent:'center', alignItems:"center", marginBottom: 20}}>
              <Text style={{fontSize: 20}}>Confirmation du mot de passe</Text>              
            </View>

            {/* Champ de saisi Email */}
            <TextInput
            placeholder="Confirmer le mot de passe"
            maxLength={40}
            style={{borderBottomWidth: 1, borderColor:"#908F8E", fontSize: 20}}            
            autoFocus={true}
            secureTextEntry={true}
            required aria-required="true"
            onChangeText={(text) => {
                this.setState({
                confirmPassword: text,
                visible: true,
                })
            }}
            />
             
             <Text style={this.state.error ? styles.error: styles.notError}>Les deux mots de passe ne corresponde pas</Text>

            <TouchableOpacity>
                <Text style={{marginTop:10}}>Afficher le mot de passe</Text>
            </TouchableOpacity>
            {/* Bouton continuer */}
            <Button
              title="CREER VOTRE COMPTE"
              disabled={this.state.visible ? false : true}
              disabledStyle={styles.button}
              disabledTitleStyle={{color: "#fff"}}
              buttonStyle={this.state.password!=="" ? styles.pressButton : styles.button}
              titleStyle={{color: "#fff"}}
              onPress={this.handleClickSubmit}
            />

            <View style={{position:'absolute',bottom:0, alignSelf:'center', marginBottom: 20 }}>
              <Text>Vous avez déjà un compte ?
              <Text onPress={()=>this. props.navigation.push('Home')} style={styles.account}> Connectez-vous</Text>
              </Text>
            </View>

        </KeyboardAvoidingView>
      )
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: "center",
      padding: 30,

    },
    button: {
      marginTop:15,
      backgroundColor:"#F9C882",

    },
    pressButton: {
      marginTop:15,
      backgroundColor: "#F08A00",
    },
    displayButton: {
        display: "none"
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
    error: {
      color: "#FF0000",
      fontSize: 15
    },
    notError: {
      display: "none"
    },
    iconNotError: {
        color:"#22BC00"
    },
    iconError:{
        color : "#DF0000"
    },
    textconfirmPassword:{
        justifyContent:'center', 
        alignItems:"center", 
        marginTop: 10, 
        marginBottom:10
    },
    displayTextconfirmPassword: {
        display: "none"
    }
  });
import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Button, Input} from 'react-native-elements'
import { Icon } from 'react-native-elements'

export default class SignupPassword extends Component {
    constructor(props) {
      super(props);
      this.state={
        password: '',
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
        const { navigation } = this.props;
        const email = navigation.getParam('email', '');
        const name = navigation.getParam('name', '');
        let regex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
        let bool = regex.test(this.state.password)
        if (bool) {
            // valid password
            this.setState({
                showButton: true,
                showIcon: true,
                error:false
            })
            this.props.navigation.push('SignupConfirmPassword', {
                email: email,
                name: name,
                password: this.state.password
            })
            
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
              <Text style={{fontSize: 20}}>Créer un mot de passe</Text>              
            </View>

            {/* Champ de saisi mot de passe */}
            <TextInput
            placeholder="Mot de passe"
            maxLength={40}
            style={{borderBottomWidth: 1, borderColor:"#908F8E", fontSize: 20}}
            autoFocus={true}
            secureTextEntry={true}
            required aria-required="true"
            onChangeText={(text) => {
                this.setState({
                password: text,
                visible: true,
                })
            }}
            />
            <Text style={this.state.error ? styles.error: styles.notError}>Entrer une combinaison d'au moins six chiffres, lettre et signes de ponctuation (tels que ! et &)</Text>

            <TouchableOpacity>
                <Text style={{marginTop:10}}>Afficher le mot de passe</Text>
            </TouchableOpacity>
            {/* Bouton continuer */}
            <Button
              title="CONTINIER"
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
      justifyContent: 'center',
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
    textPassword:{
        justifyContent:'center', 
        alignItems:"center", 
        marginTop: 10, 
        marginBottom:10
    },
    displayTextPassword: {
        display: "none"
    }
  });
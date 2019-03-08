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

    componentDidMount(){
        this.interval = setInterval(() => this.checkPasswordNotValide(),2000);
    }
    
    checkPasswordNotValide(){
        const {password} = this.state
        let regex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
        let bool = regex.test(password)
        if (bool) {
            // not a valid password
            this.setState({
                showButton: true,
                showIcon: true,
                error:false
            })
            
          }else{
            this.setState({
                showButton: false,
                showIcon: false,
                error: true
            })
          }
    }

    handleClickSubmit(){
        clearInterval(this.interval)
        const { navigation } = this.props;
        const email = navigation.getParam('email', '');
        const name = navigation.getParam('name', '');
        this.props.navigation.push('SignupConfirmPassword', {
            email: email,
            name: name,
            password: this.state.password
        })  
    }
    
    
    render() {
      return (
          <KeyboardAvoidingView style={styles.container}>

            {/* Title */}
            <View style={{justifyContent:'center', alignItems:"center", marginBottom: 20}}>
              <Text style={{fontSize: 20}}>Créer un mot de passe</Text>              
            </View>

            {/* Champ de saisi Email */}
            <Input
            placeholder="Mot de passe"
            rightIcon={<Icon
            name='check'
            iconStyle={this.state.showIcon ? styles.iconNotError : styles.iconError}
            />}
            maxLength={40}
            inputContainerStyle={{borderBottomWidth: 1, borderColor:"#908F8E"}}
            inputStyle={{fontSize: 20}}
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

            <View style={this.state.password=="" ? styles.textPassword : styles.displayTextPassword}>
              <Text style={{fontSize: 20, width: "80%",  textAlign:"center"}}>
                Entrer une combinaison d'au moins six chiffres, lettre et signes de ponctuation 
              </Text>
              <Text style={{fontSize: 20, width: "80%",  textAlign:"center"}}>(tels que ! et &)</Text>          
            </View>
            {/* Bouton continuer */}
            <Button
              title="CONTINIER"
              disabled={this.state.showButton & !this.state.error ? false : true}
              disabledStyle={styles.button}
              disabledTitleStyle={{color: "#fff"}}
              buttonStyle={this.state.password!=="" ? styles.pressButton : styles.displayButton}
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
      padding: 30,

    },
    button: {
      marginTop:15,
      marginRight:10,
      marginLeft: 10,
      backgroundColor:"#F9C882",

    },
    pressButton: {
      marginTop:15,
      marginRight:10,
      marginLeft: 10,
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
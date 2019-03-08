import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Button, Input} from 'react-native-elements'

export default class SignupName extends Component {
    constructor(props) {
      super(props);
      this.state={
        name: '',
        visible: false,
        error: false, 
      }
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
    }

    static navigationOptions = {
      title: 'Inscription',
    };

    
    handleClickSubmit(){
        const { navigation } = this.props;
        const email = navigation.getParam('email', '');
        this.props.navigation.push('SignupDate', {
            email: email,
            name: this.state.name.toLowerCase(),
        })        
    }


    render() {
      return (
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

            {/* Title */}
            <View style={{justifyContent:'center', alignItems:"center", marginBottom: 20, padding:5}}>
              <Text style={{fontSize: 20, textAlign:"center"}}>Entrer un nom d'utilisateur qui sera utilisé pour que vos amis vous retrouve</Text>              
            </View>

            {/* Champ de saisi du Nom */}
            <View style={{flexDirection:"row"}}>
                <Text style={{alignSelf: "center",fontSize:20}}>@</Text>

                <Input
                placeholder="Nom d'utilisateur"
                autoFocus={true}
                inputContainerStyle={{borderBottomWidth: 1, borderColor:"#908F8E",marginRight:10}}
                inputStyle={{fontSize: 20}}
                maxLength={25}
                type="text"
                required aria-required="true"
                onChangeText={(text) => {
                this.setState({
                    name: text,
                    visible: true
                })
                }}
                />

            </View>
        
            
            
            {/* Bouton continuer */}
            <Button
              title="CONTINUER"
              disabled={this.state.name=='' ? true : false}
              disabledStyle={styles.button}
              disabledTitleStyle={{color: "#fff"}}
              buttonStyle={styles.pressButton}
              titleStyle={{color: "#fff"}}
              onPress={this.handleClickSubmit}
            />

            <View style={{position:'absolute',bottom:0, alignSelf:'center', marginBottom: 20 }}>
              <Text>Vous avez déjà un compte ?
              <Text onPress={()=>this.props.navigation.push('Home')} style={styles.account}> Connectez-vous</Text>
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
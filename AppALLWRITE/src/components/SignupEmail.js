import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, StyleSheet } from 'react-native'
import {Button, Input} from 'react-native-elements'

export default class SignupEmail extends Component {
    constructor(props) {
      super(props);
      this.state={
        email: '',
      }
    }
    static navigationOptions = {
      title: 'Iscription',
    };
    
    render() {
      return (
        <KeyboardAvoidingView style={styles.container} >
          <View style={styles.containerInput}>
            <Input
            placeholder="Email"
            style={styles.email}
            onChangeText={(text) => {
              this.setState({
                email: text,
                visible: true
              })
            }}
            />
              <Button
          title="CONTINUER"
          type="clear"
          containerStyle={styles.button}
          titleStyle={{color: "#58E891"}}
          onPress={() => this.props.navigation.push('Signup', {
            email: this.state.email
          })
        }
            /> 
          </View>
          <View style={styles.containerAccount}>
              <Text> Vous avez déjà un compte ? 
              <Text onPress={() => this.props.navigation.push('Signin')}
              style={styles.account}> Connectez-vous</Text>
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
    },
    containerInput: {
      flex: 3,
      padding: 20,
      justifyContent: 'center',      
      alignItems: 'center',
      
    },
    button: {
      marginTop:20
    },
    containerAccount: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36,
      alignItems: 'center',
    },
    account: {
      color: '#58E891',
    },
  });
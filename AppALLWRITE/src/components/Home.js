import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Button, Input} from 'react-native-elements'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <View style={styles.containertitle}><Text style={styles.title} >ALLWrite</Text></View>
        <View style={styles.containerSloguan}>
            
            <Text style={styles.text}>Pour un monde plus fun et plus connecter </Text>
        </View>

        <View style={styles.containerButtons}>
            <Button title="Créer un compte"titleStyle={{ fontSize: 15}} buttonStyle={styles.buttonStyleAccount} containerStyle={{borderRadius: 25, backgroundColor:"#FF00EC"}}onPress={() => this.props.navigation.push('SignupEmail')} />
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.push('Signin')}><Text style={styles.buttonStyleConnection}>Se connecter</Text></TouchableOpacity>
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
    buttonStyleAccount: {
        backgroundColor: "#FFD100",
        margin: 10,
        padding:15,
        borderRadius: 30
    },
    buttonStyleConnection: {
        margin: 10,
        color: "#FFAE00",
        fontSize: 15


    },
    containerButtons: {
        flex: 1,
        // width: "100%",
        padding: 20,
        justifyContent: 'flex-end',
        // backgroundColor: "#000000"

    },
    containerSloguan: {
        flex: 2,
        backgroundColor: "#FF00EC",
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text: {
        width:200,
        fontSize: 40,
        color: "#fff",
        marginLeft: 36

    },
    containertitle: {
        flex: 1,
        backgroundColor: "#FC3D00",
        justifyContent: 'center',
        alignItems: 'center', 
    },
    title: {
        fontSize: 40 
    }
  });
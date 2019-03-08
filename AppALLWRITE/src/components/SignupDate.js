import React, { Component } from 'react'
import { Text, TouchableOpacity, View,  StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Button, Input} from 'react-native-elements'

import moment from 'moment'

export default class SignupDate extends Component {
    constructor(props) {
        super(props);
        this.state={
            isDateTimePickerVisible: false,
            date: moment(new Date).format('DD MMMM YYYY'),
            chosenDate: moment(new Date).format('DD MMMM YYYY'),
            dateString: ''
        }
    }


  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.setState({
        isDateTimePickerVisible: false,
        chosenDate: moment(date).format('DD MMMM YYYY')
    })
  };

  maxDateString(){
      let chaine = ""
      const { date } = this.state
      for(let i in date.length ){
        chaine += date[i]
        this.setState({ dateString: chaine})
      }
  }

  render () {
    return (
      <View  style={styles.container}>
        <View style={{justifyContent:'center', alignItems:"center", marginBottom: 20, padding:5}}>
              <Text style={{fontSize: 20, textAlign:"center"}}>Quelle est la date de votre anniversaire ?</Text>              
            </View>
        <View style={{justifyContent:'center', alignItems:"center", marginBottom: 5, padding:15, backgroundColor:"#FAFAFA", borderRadius: 10}}>

            <TouchableOpacity onPress={this._showDateTimePicker}>
                <Text style={{fontSize:20, color:"black"}}>{this.state.chosenDate}</Text>
            </TouchableOpacity>

            <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            datePickerModeAndroid={"spinner"}
            />
        </View>
        <Button
            title="CONTINUER"
            disabled={this.state.chosenDate === this.state.date ? true : false}
            disabledStyle={styles.button}
            disabledTitleStyle={{color: "#fff"}}
            buttonStyle={styles.pressButton}
            titleStyle={{color: "#fff"}}
            onPress={this.handleClickSubmit}
        /> 
            
            

            
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: "center",      
      alignItems: 'stretch',
      padding: 30,

    },
    button: {
        backgroundColor:"#F9C882",
        borderRadius: 10
  
      },
      pressButton: {
        backgroundColor: "#F08A00",
        
      },
  });
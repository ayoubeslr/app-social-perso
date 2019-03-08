import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
// redux
import { connect } from 'react-redux';
// pages
import Home from './../components/Home'
import SignupEmail from './../components/SignupEmail'
import SignupName from './../components/SignupName'
import SignupPassword from './../components/SignupPassword'
import SignupConfirmPassword from './../components/SignupConfirmPassword'


import Signup from './../components/Signup'
import Signin from './../components/Signin'
import Messenger from './../components/Messenger'


const RootStack = createStackNavigator(
  {
    Home: Home,
    SignupEmail: SignupEmail,
    SignupName: SignupName,
    SignupPassword: SignupPassword,
    SignupConfirmPassword: SignupConfirmPassword,
    Signup: Signup,
    Signin: Signin,
    Messenger: Messenger,
  },
  {
    initialRouteName: 'Home',
  }
);


const AppContainer = createAppContainer(RootStack);

class Navigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const mapStateToProps = state => {
    return { sessionConnect: state.sessionReducer}
  }
  
  export default connect(mapStateToProps,null)(Navigator)
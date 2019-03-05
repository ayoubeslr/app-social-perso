import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
// redux
import { connect } from 'react-redux';
// pages
import SignupEmail from './../components/SignupEmail'
import Signup from './../components/Signup'
import Signin from './../components/Signin'

const RootStack = createStackNavigator(
  {
    SignupEmail: SignupEmail,
    Signup: Signup,
    Signin: Signin,
  },
  {
    initialRouteName: 'SignupEmail',
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
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Text, View } from 'react-native';
import LoginScreen, { SocialButton } from "react-native-login-screen";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { enableScreens } from 'react-native-screens';
enableScreens();
// export default class App extends Component {
//   render() {
//     return  <View style={{ flex: 1, flexDirection: 'row' }}>
//    <LoginScreen
//   logoImageSource={require("/Users/satishchadokar/Documents/satish/AwesomeProject/android/assets/logo.jpg")}
//   onLoginPress={() => {}}
//   onSignupPress={() => {}}
//   onEmailChange={(email: string) => {}}
//   onPasswordChange={(password: string) => {}}
// />
//   </View>
//    // return <WebView scalesPageToFit = {true} startInLoadingState={true} source={{ uri: 'http://139.59.84.120:3000/login' }} />;
//   }
// }

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
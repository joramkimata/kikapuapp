import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class Splash extends Component {
   render(){
     return (
       <View style={styles.wrapper}>
           <Image style={styles.logo} source={require('../images/kikapu-app-logo.png')} />
       </View>
     );
   }
}


const styles = StyleSheet.create({
    wrapper : {
      backgroundColor: '#FFC515',
      flex: 1,
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200
    }
});

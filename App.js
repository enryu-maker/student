/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//hello
import React from 'react';
import {Node} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import Dashboard from './dashboard'

const App =() =>  {
  
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Dashboard/>
    </SafeAreaView>
      
    
    

  );
};

const styles = StyleSheet.create({
  maincontainer:{
    flex:1
  }
});

export default App;

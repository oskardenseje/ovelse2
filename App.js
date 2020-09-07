import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from "./components/FirstComponent";
import TitleComponent from "./components/TitleComponent";
import StateButton from "./components/StateEventHandlerComponent";
import InputComponent from "./components/InputComponent";

export default function App() {
  return (
      /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
      <View style={styles.container}>
          <Text>Øvelse 2 - State, events, props og references</Text>

          <StatusBar style="auto" />

          <FirstComponent/>

          <TitleComponent title = 'Første title' />

          <TitleComponent title = 'Anden title'/>

          <StateButton />

          <InputComponent />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    component:{
      paddingTop:10
    }

});

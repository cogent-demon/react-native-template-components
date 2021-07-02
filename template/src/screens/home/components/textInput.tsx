import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-element-textinput';

const TextInputScreen = _props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={{ marginTop: 20 }}
          containerStyle={styles.textinput}
          label="Normal"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          onChangeText={text => {
            console.log(text);
          }}
          numeric
          focusColor="red"
          textError="Please enter"
        />

        <TextInput
          style={{ marginTop: 20 }}
          containerStyle={styles.textinput}
          label="Normal"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          secureTextEntry
          onChangeText={text => {
            console.log(text);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textinput: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
});

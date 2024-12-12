import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableHighlight,} from 'react-native';
import { Card } from 'react-native-paper';


export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState('Email');
  const [pass, onChangePass] = React.useState('Password');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.border}>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>
            <Header title={"SpaceCraft"}/>
          </Text>
        </View>
         <TextInput
          style={styles.email}
          onChangeText={onChangeEmail}
          value={email}
          clearTextOnFocus={true}
        />
        <TextInput
          style={styles.password}
          onChangeText={onChangePass}
          value={pass}
          secureTextEntry
          clearTextOnFocus={true}
        />
        <TouchableHighlight
          onPress={() => {
            alert('You have officially logged in!');
          }}>
          <View style={styles.logIn}>
            <Text style={styles.logText}>
              Login
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.terms}>
          <Text style={styles.termsText}>
            Read Terms and conditions.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',
  },
  border: {
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    height: 550,
    width: 300,
    marginLeft: 15,
  },
  titleBox: {
    backgroundColor: '#9083f2',
    height: 150,
    width: 296,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  email: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 35,
    width: 200,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5, 
  },
  emailText: {
    fontStyle: 'italic',
    fontSize: 15,
  },
  password: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 15,
    width: 200,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5, 
  },
  passText: {
    fontStyle: 'italic',
    fontSize: 15,
  },
  logIn: {
    backgroundColor: '#7c6bfa',
    marginTop: 30,
    borderRadius: 5,
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  logText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 15,
  },
  terms: {
    marginTop: 40,
  },
  termsText: {
    color: 'grey',
  },
});


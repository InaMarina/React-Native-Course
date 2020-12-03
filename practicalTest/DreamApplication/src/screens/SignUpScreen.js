import React, {useState, useContext} from 'react';
import {View, StyleSheet, ImageBackground, Alert} from 'react-native';
import {Title, IconButton} from 'react-native-paper';

//Importing components
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

//Imported AuthContext make some functions and user information
//available to use everywhere where it is imported
import {AuthContext} from '../navigation/AuthProvider';

export default function SignupScreen({navigation}) {
  const {register} = useContext(AuthContext);

  //Statehooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secPassword, setSecPassword] = useState('');

  //Function that checks that the passwords match, and if -> register (function from authcontext) else -> Alert
  const checkValidity = () => {
    console.log(password, secPassword);
    if (password == secPassword) {
      register(email, password);
    } else {
      Alert.alert(
        'Rekisteröinti epäonnistui',
        'Tarkista että salasanasi täsmäävät',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.image}>
      {/* Main content of the screen: input for email, input for password x 2, 
      button signing in (chechValidity function) 
      button that navigates back to login*/}
      <View style={styles.container}>
        <Title style={styles.titleText}>Rekisteröidy UniKirjaan!</Title>
        <FormInput
          labelName="Sähköposti:"
          value={email}
          autoCapitalize="none"
          onChangeText={(userEmail) => setEmail(userEmail)}
        />

        <FormInput
          labelName="Salasana:"
          value={password}
          secureTextEntry={true}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
        <FormInput
          labelName="Toista salasana:"
          value={secPassword}
          secureTextEntry={true}
          onChangeText={(secPassword) => setSecPassword(secPassword)}
        />
        <FormButton
          title="Rekisteröidy"
          modeValue="contained"
          labelStyle={styles.loginButtonLabel}
          onPress={() => checkValidity()}
        />
        <IconButton
          icon="keyboard-backspace"
          size={30}
          style={styles.navButton}
          color="#ffffff"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    color: '#ffffff',
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

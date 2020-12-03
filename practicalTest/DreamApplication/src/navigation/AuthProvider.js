import React, {createContext, useState} from 'react';

//Importing auth form firebase
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

//createContext API instance
export const AuthContext = createContext({});

//Provider -> Routes.js , makes it possible to use the login, register and logout functions
//and user info from everywhere in the app
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            Alert.alert(
              'Sisäänkirjautuminen epäonnistui',
              'Käytitkö varmasti oikeita tunnuksia?',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            Alert.alert(
              'Rekisteröinti epäonnistui',
              'Onhan salasanasi yli kuusi merkkiä pitkä?',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            Alert.alert(
              'Kirjauduit ulos',
              'Nähdään taas seuraavan unen jälkeen!',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

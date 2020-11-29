import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Firebase auth that provides some useful functions, like checking the user
import auth from '@react-native-firebase/auth';

//Check the user and set it into the AuthContext and it will be available for all components
import {AuthContext} from './AuthProvider';

//Activity indicator for the async functions
import Loading from '../components/Loading';

//Importing the stack navigators
import AuthStack from './AuthStack';
import AppStack from './AppStack';

export default function Routes() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }
  //useEffect is a react hook. By default, it runs both after the first render and after every update
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  //Conditionally render depending on if user is true or not
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

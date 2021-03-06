import * as React from 'react';
import {useContext} from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

import {AuthContext} from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Home Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('SettingScreenStack')}
            title="Go to Setting Screen"
          />
          <Button
            onPress={() => navigation.navigate('ExploreScreen')}
            title="Go to Explore Screen"
          />
          <FormButton buttonTitle="Logout" onPress={() => logout()} />
        </View>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
          React Navigate Drawer with Bottom Tab
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import React, {useContext} from 'react';

import {
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Title, Button, Card, Paragraph} from 'react-native-paper';

//Imported AuthContext make some functions and user information
//available to use everywhere where it is imported
import {AuthContext} from '../navigation/AuthProvider';

export default function DreamDiaryScreen({navigation}) {
  const {logout} = useContext(AuthContext);

  return (
    <>
      {/* Background pic */}
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}>
        <StatusBar backgroundColor="#1b053b" />

        {/* Menu and logoutbutton */}
        <View style={styles.menuLogout}>
          <TouchableOpacity
            style={{paddingStart: 10}}
            onPress={() => navigation.openDrawer()}>
            <Icon name="bars" color="#b55f91" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingEnd: 10}} onPress={() => logout()}>
            <Icon name="sign-out" color="#b55f91" size={32} />
          </TouchableOpacity>
        </View>

        {/* Main content of the screen: Cards for instructions and more info*/}
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Card style={styles.card}>
              <Card.Cover source={require('../assets/cardcover1.png')} />
              <Card.Content>
                <Title>Tervetuloa Unikirjaasi!</Title>
                <Paragraph>
                  Täältä löydät lisätietoja sovelluksesta ja sen käytöstä:
                </Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => navigation.navigate('InfoScreenStack')}>
                  Lisätietoja
                </Button>
              </Card.Actions>
            </Card>
            <Card style={styles.card}>
              <Card.Cover source={require('../assets/cardcover2.png')} />
              <Card.Content>
                <Title>Miksi unia kannattaa kirjoittaa?</Title>
                <Paragraph>
                  Unien kirjoittamisesta on monia hyötyjä, lisätietoja saat
                  täältä:
                </Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => navigation.navigate('LearnScreenStack')}>
                  Unien kirjoittaminen
                </Button>
              </Card.Actions>
            </Card>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  menuLogout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    color: '#ffffff',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: '#1b053b',
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  card: {
    marginVertical: 5,
  },
});

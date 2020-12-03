import React, {useState, useEffect, useContext} from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import {List, Divider, IconButton} from 'react-native-paper';

//Importing firestore where data is stored
import firestore from '@react-native-firebase/firestore';

//Importing components
import Loading from '../components/Loading';

//Imported AuthContext make some functions and user information
//available to use everywhere where it is imported
import {AuthContext} from '../navigation/AuthProvider';

export default function DreamListScreen({navigation}) {
  const {user} = useContext(AuthContext);

  //reference to the firestore collection, used to subscribe from the colelction
  const ref = firestore().collection('dreams');

  //Statehooks
  const [loading, setLoading] = useState(true);
  const [dreams, setDreams] = useState([]);
  const currentUserEmail = user.email;

  //Happens when changes in ref happens,
  //subscribes the data from firestore that has the same email as current user
  //sets it to dreams state hook
  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {userEmail, title, content} = doc.data();
        if (userEmail === currentUserEmail) {
          list.push({
            id: doc.id,
            userEmail,
            title,
            content,
          });
        }
      });
      setDreams(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* button for closing the screen */}
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon="close-circle"
          size={40}
          color="#b55f91"
          onPress={() => navigation.goBack()}
        />
      </View>

      {/* content of the screen: list of dreams */}
      <View style={styles.container}>
        <FlatList
          style={styles.item}
          data={dreams}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({item}) => (
            <TouchableOpacity>
              <List.Item
                key={item.id}
                title={item.title}
                description={item.content}
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={1}
                left={(props) => (
                  <List.Icon {...props} icon="equal" size={40} />
                )}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'rgba(243, 230, 251,  0.5)',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

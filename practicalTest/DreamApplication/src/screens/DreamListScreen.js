import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import {List, Divider, IconButton} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

import Loading from '../components/Loading';

export default function DreamListScreen({navigation}) {
  const ref = firestore().collection('dreams');

  const [loading, setLoading] = useState(true);
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {date, title, content} = doc.data();
        list.push({
          id: doc.id,
          date,
          title,
          content,
        });
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
  console.log(dreams);

  return (
    <>
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon="close-circle"
          size={40}
          color="#fea34d"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={dreams}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({item}) => (
            <TouchableOpacity>
              <List.Item
                title={item.title}
                description={item.content}
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={1}
                left={(props) => <List.Icon {...props} icon="folder" />}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

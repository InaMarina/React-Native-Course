import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

//Loading screen that is shown when usinh useEffect hooks
export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#b55f91" />
    </View>
  );
}

//Stylesheet
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

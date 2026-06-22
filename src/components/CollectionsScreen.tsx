import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CollectionsScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Collections</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '600',
  },
});

import React from 'react';
import { View, Text } from 'react-native';

const SettingMaximum = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set your maximum spending limit here!</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
};

export default SettingMaximum;

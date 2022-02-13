import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true);

  async function preload() {
    try {
      await Promise.all([Font.loadAsync(Ionicons.font)]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    preload().then(() => setLoading(false));
  }, []);

  return loading ? (
    <AppLoading />
  ) : (
    <View style={styles.container}>
      <Text>NomadCoffee Mobile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

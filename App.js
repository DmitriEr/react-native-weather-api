import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import getCurrentPosition from './src/Services/ServiceGeoposition';
import getWeather from './src/Services/ServiceWeather';
import Day from './src/Components/Day';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [result, setResult] = useState([]);
  const [place, setPlace] = useState('');

  useEffect(() => {
    getCurrentPosition().then((value) => {
      const { loc, city } = value;
      setPlace(city);
      const path = loc.split(',');
      const latitude = path[0];
      const longitude = path[1];
      getWeather(latitude, longitude).then((weather) => {
        setResult(weather);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.city}>{place}</Text>
      {result.map((value, index) => {
        return (
        <Day data={value} key={index} />
        )
      })}
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  city: {
    backgroundColor: '#e5eeed',
    textAlign: 'center',
    padding: 10,
  }
});

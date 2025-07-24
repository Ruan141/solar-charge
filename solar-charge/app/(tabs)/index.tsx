import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { styles } from './styles';

export default function App() {
  const [solarSize, setSolarSize] = useState('');
  const [sunHours, setSunHours] = useState('');
  const [batterySize, setBatterySize] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculateCharge = () => {
    if (!solarSize || !sunHours || !batterySize) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setLoading(true);
    // Simulate a delay for a better user experience
    setTimeout(() => {
      const solarKW = parseFloat(solarSize);
      const sunlight = parseFloat(sunHours);
      const batteryKWh = parseFloat(batterySize);

      const dailySolarOutput = solarKW * sunlight; // kWh per day
      const percentCharged = Math.min((dailySolarOutput / batteryKWh) * 100, 100);

      setResult(percentCharged.toFixed(1));
      setLoading(false);
    }, 1000);
  };

  const clearFields = () => {
    setSolarSize('');
    setSunHours('');
    setBatterySize('');
    setResult(null);
  };

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <Text style={styles.title}>SolarCharge App</Text>

      <TextInput
        style={styles.input}
        placeholder="Solar panel size (kW)"
        placeholderTextColor="#95a5a6"
        keyboardType="numeric"
        onChangeText={setSolarSize}
        value={solarSize}
      />
      <TextInput
        style={styles.input}
        placeholder="Sunlight hours per day"
        placeholderTextColor="#95a5a6"
        keyboardType="numeric"
        onChangeText={setSunHours}
        value={sunHours}
      />
      <TextInput
        style={styles.input}
        placeholder="EV battery capacity (kWh)"
        placeholderTextColor="#95a5a6"
        keyboardType="numeric"
        onChangeText={setBatterySize}
        value={batterySize}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculateCharge} color="#27ae60" />
        <Button title="Clear" onPress={clearFields} color="#c0392b" />
      </View>

      {loading && <ActivityIndicator size="large" color="#ecf0f1" style={styles.loading} />}

      {result !== null && !loading && (
        <Text style={styles.result}>
          Your solar system can charge {result}% of your EV daily.
        </Text>
      )}
    </LinearGradient>
  );
}

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [solarSize, setSolarSize] = useState('');
  const [sunHours, setSunHours] = useState('');
  const [batterySize, setBatterySize] = useState('');
  const [result, setResult] = useState(null);

  const calculateCharge = () => {
    const solarKW = parseFloat(solarSize);
    const sunlight = parseFloat(sunHours);
    const batteryKWh = parseFloat(batterySize);

    const dailySolarOutput = solarKW * sunlight; // kWh per day
    const percentCharged = Math.min((dailySolarOutput / batteryKWh) * 100, 100);

    setResult(percentCharged.toFixed(1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SolarCharge App</Text>

      <TextInput
        style={styles.input}
        placeholder="Solar panel size (kW)"
        keyboardType="numeric"
        onChangeText={setSolarSize}
      />
      <TextInput
        style={styles.input}
        placeholder="Sunlight hours per day"
        keyboardType="numeric"
        onChangeText={setSunHours}
      />
      <TextInput
        style={styles.input}
        placeholder="EV battery capacity (kWh)"
        keyboardType="numeric"
        onChangeText={setBatterySize}
      />

      <Button title="Calculate" onPress={calculateCharge} />

      {result !== null && (
        <Text style={styles.result}>
          Your solar system can charge {result}% of your EV daily.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

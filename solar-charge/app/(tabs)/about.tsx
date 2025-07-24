import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

const NorwegianEVWebinar = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>EV Learnings from the Norwegian EV Association</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Norway's EV Leadership</Text>
        <Text style={styles.bulletPoint}>• <Text style={styles.stat}>93%</Text> of new car sales are electric (May 2025)</Text>
        <Text style={styles.bulletPoint}>• 1 in 4 cars on the road are electric</Text>
        <Text style={styles.bulletPoint}>• 98% of electricity is renewable, reducing EV emissions</Text>
      </View>

      <View style={styles.highlightBox}>
        <Text style={styles.highlightHeader}>Lifecycle CO₂ Emissions (per vehicle):</Text>
        <Text style={styles.bulletPoint}>• Gasoline car: <Text style={styles.stat}>49,559 kg</Text></Text>
        <Text style={styles.bulletPoint}>• Diesel car: <Text style={styles.stat}>38,504 kg</Text></Text>
        <Text style={styles.bulletPoint}>• EV (conventional electricity): <Text style={styles.stat}>17,497 kg</Text></Text>
        <Text style={styles.bulletPoint}>• EV (renewable electricity): <Text style={styles.stat}>5,492 kg</Text></Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Charging Insights</Text>
        <Text style={styles.bulletPoint}>• <Text style={styles.stat}>81%</Text> of charging is done at home, mostly overnight</Text>
        <Text style={styles.bulletPoint}>• Fast charging is viewed as a rest opportunity by <Text style={styles.stat}>65%</Text> of drivers</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Myth Busting</Text>
        <Text style={styles.bulletPoint}>• <Text style={styles.bold}>Battery Life:</Text> EV batteries outlast vehicles despite minor degradation</Text>
        <Text style={styles.bulletPoint}>• <Text style={styles.bold}>Fire Safety:</Text> EVs are <Text style={styles.stat}>less likely</Text> to catch fire than ICE vehicles</Text>
        <Text style={styles.bulletPoint}>• <Text style={styles.bold}>Resources:</Text> Minerals are sufficient for global EV transition</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>User Satisfaction</Text>
        <Text style={styles.bulletPoint}>• <Text style={styles.stat}>92%</Text> of Norwegian EV drivers are satisfied or very satisfied</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Resources</Text>
        <Text
          style={styles.link}
          onPress={() => openLink('https://www.ev-playbook.no/myth-busting')}
        >
          • EV Myth Busting Guide
        </Text>
        <Text
          style={styles.link}
          onPress={() => openLink('https://www.youtube.com/@Elbilforeningen')}
        >
          • Norwegian EV Association YouTube
        </Text>
        <Text
          style={styles.link}
          onPress={() => openLink('https://www.transportenvironment.org')}
        >
          • Transport & Environment Reports
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Source: Norwegian EV Association Webinar, June 2025</Text>
        <Text style={styles.footerText}>Data from OFV.no and member surveys</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    paddingBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  stat: {
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  bold: {
    fontWeight: 'bold',
  },
  highlightBox: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    marginBottom: 20,
  },
  highlightHeader: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#3498db',
    marginLeft: 10,
    marginBottom: 5,
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
});

export default NorwegianEVWebinar;

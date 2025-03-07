import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';

const MicronutrientsPage = () => {
  return (
    <ImageBackground 
      source={require('../../assets/micro.jpg')} 
      style={styles.background}
      imageStyle={{ opacity: 0.7 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Micronutrients</Text>
        
        <Section title="What Are Micronutrients?">
          <Text style={styles.text}>
            Micronutrients are essential vitamins and minerals required in small amounts for various physiological functions.
            Unlike macronutrients, which provide energy, micronutrients help in energy production, immune function, and overall well-being.
          </Text>
        </Section>

        <Section title="Types of Micronutrients">
          <Text style={styles.text}><Text style={styles.bold}>Vitamins:</Text> Organic compounds crucial for body functions.</Text>
          <Text style={styles.text}><Text style={styles.bold}>Minerals:</Text> Inorganic substances necessary for bone health, fluid balance, and more.</Text>
        </Section>

        <Section title="Essential Vitamins">
          {renderList([
            "Vitamin A: Important for vision, skin health, and immunity.",
            "Vitamin C: Boosts immune function and acts as an antioxidant.",
            "Vitamin D: Helps in calcium absorption and bone health.",
            "Vitamin E: Protects cells from oxidative damage.",
            "Vitamin K: Essential for blood clotting and bone metabolism."
          ])}
        </Section>

        <Section title="Essential Minerals">
          {renderList([
            "Calcium: Strengthens bones and teeth.",
            "Iron: Essential for red blood cell production.",
            "Zinc: Boosts immune function and wound healing.",
            "Magnesium: Helps with muscle function and energy production.",
            "Potassium: Regulates blood pressure and muscle contractions."
          ])}
        </Section>

        <Section title="Why Are Micronutrients Important?">
          <Text style={styles.text}>
            Deficiencies in micronutrients can lead to serious health issues, including weakened immunity, poor growth, and chronic diseases.
            A balanced diet rich in fruits, vegetables, lean proteins, and whole grains ensures adequate micronutrient intake.
          </Text>
        </Section>
      </ScrollView>
    </ImageBackground>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const renderList = (items) => (
  <View>
    {items.map((item, index) => (
      <Text key={index} style={styles.listItem}>• {item}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
});

export default MicronutrientsPage;
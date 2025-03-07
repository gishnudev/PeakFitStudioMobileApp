import React from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground } from "react-native";

const MacronutrientsPage = () => {
  return (
    <ImageBackground
      source={require("../../assets/macro.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Macronutrients & Body Composition</Text>
        
        <Section title="What are Macronutrients?" text="Macronutrients provide energy and are required in large amounts for human survival. They include carbohydrates, proteins, and fats, each playing a vital role in overall health and performance." />
        
        <Section title="1. Carbohydrates" text="Carbs are the body's primary energy source, found in foods like bread, rice, pasta, fruits, and vegetables. They break down into glucose, fueling bodily functions and workouts." />
        
        <Section title="2. Proteins" text="Essential for muscle repair and growth, proteins are found in meats, eggs, dairy, and plant-based sources like legumes. They provide amino acids needed for various bodily functions." />
        
        <Section title="3. Fats" text="Healthy fats support brain function, hormone production, and energy storage. Sources include nuts, seeds, avocados, and olive oil. Omega-3 and Omega-6 fatty acids are essential for optimal health." />
        
        <Section title="Body Composition & Macronutrients" text="A balanced intake of macronutrients influences body composition, which is the proportion of fat, muscle, and bone in your body. Proper macronutrient distribution helps in weight management, muscle building, and overall health." />
      </ScrollView>
    </ImageBackground>
  );
};

const Section = ({ title, text }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  container: {
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    color: "white",
    lineHeight: 22,
  },
});

export default MacronutrientsPage;

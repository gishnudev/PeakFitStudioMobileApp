import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const GoalSet = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Goal Setting</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Short-Term Goals</Text>
        <Text style={styles.text}>
          Short-term goals help you focus on immediate improvements. They are
          typically achieved within days or weeks.
        </Text>
        <Text style={styles.listItem}>• Exercise at least 3 times a week</Text>
        <Text style={styles.listItem}>• Drink 2 liters of water daily</Text>
        <Text style={styles.listItem}>• Get at least 7 hours of sleep every night</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Long-Term Goals</Text>
        <Text style={styles.text}>
          Long-term goals require commitment and consistency. They usually take
          months or years to achieve.
        </Text>
        <Text style={styles.listItem}>• Maintain a healthy body composition</Text>
        <Text style={styles.listItem}>• Achieve a balanced diet and sustain it</Text>
        <Text style={styles.listItem}>• Improve cardiovascular endurance</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SMART Goals</Text>
        <Text style={styles.text}>
          SMART goals are <Text style={styles.bold}>Specific, Measurable, Achievable, Relevant, and Time-bound</Text>.
        </Text>
        <Text style={styles.listItem}><Text style={styles.bold}>Specific:</Text> Clearly define what you want to achieve</Text>
        <Text style={styles.listItem}><Text style={styles.bold}>Measurable:</Text> Track progress using quantifiable metrics</Text>
        <Text style={styles.listItem}><Text style={styles.bold}>Achievable:</Text> Set realistic and attainable goals</Text>
        <Text style={styles.listItem}><Text style={styles.bold}>Relevant:</Text> Align with your lifestyle and aspirations</Text>
        <Text style={styles.listItem}><Text style={styles.bold}>Time-bound:</Text> Establish a deadline to stay accountable</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 20,
    minHeight: "100%",
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
    color: "white",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default GoalSet;
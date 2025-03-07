import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const Layer1 = () => {
  return (
    <View style={styles.container}>
      {/** Stats Section */}
      {stats.map((stat, index) => (
        <View key={index} style={styles.statBox}>
          <View style={styles.row}>
            <Text style={styles.number}>{stat.number}</Text>
            <Text style={styles.label}>{stat.label}</Text>
          </View>
          <Text style={styles.description}>{stat.description}</Text>
        </View>
      ))}
    </View>
  );
};

// **Data Array for Stats**
const stats = [
  { number: "100%", label: "Client Satisfaction", description: "Our members love their results and experience" },
  { number: "5+", label: "Years of Experience", description: "Trust in our proven track record of transforming" },
  { number: "800+", label: "Active Members", description: "Join our thriving fitness community" },
  { number: "24/9", label: "Support Available", description: "Expert assistance whenever you need it" },
];

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  statBox: {
    width: Dimensions.get("window").width * 0.9, // Responsive width
    marginVertical: 10,
    padding: 20, // Increased padding for better spacing
    borderRadius: 10,
    backgroundColor: "#1b1c1c",
    shadowColor: "#d32f2f", // Adds a subtle shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8, // Added for better spacing
  },
  number: {
    color: "#d32f2f",
    fontSize: 28, // Slightly larger for emphasis
    fontWeight: "bold",
    marginRight: 12, // Increased margin for better spacing
  },
  label: {
    color: "white",
    fontSize: 20, // Increased font size for better visibility
    fontWeight: "600",
  },
  description: {
    color: "gray",
    fontSize: 16,
    marginTop: 8, // Increased margin for better spacing
  },
});

export default Layer1;
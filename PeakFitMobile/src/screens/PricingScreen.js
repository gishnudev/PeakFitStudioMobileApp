import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PricingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Plan</Text>

      {/* Basic Plan */}
      <View style={styles.plan}>
        <Text style={styles.planTitle}>Basic Plan</Text>
        <Text style={styles.planPrice}>$9.99/month</Text>
        <Text style={styles.planDescription}>
          Access to basic features with limited support.
        </Text>
        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={() => navigation.navigate("Payment", { plan: "Basic", price: 9.99 })}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>

      {/* Premium Plan */}
      <View style={styles.plan}>
        <Text style={styles.planTitle}>Premium Plan</Text>
        <Text style={styles.planPrice}>$19.99/month</Text>
        <Text style={styles.planDescription}>
          All features + priority support + exclusive content.
        </Text>
        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={() => navigation.navigate("Payment", { plan: "Premium", price: 19.99 })}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1b1c1c",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  plan: {
    width: "100%",
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  planPrice: {
    fontSize: 18,
    color: "#ff5252",
    marginBottom: 10,
  },
  planDescription: {
    color: "#ccc",
    marginBottom: 10,
  },
  subscribeButton: {
    backgroundColor: "#d32f2f",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PricingScreen;

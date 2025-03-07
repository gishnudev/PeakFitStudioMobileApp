import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PaymentScreen = ({ route, navigation }) => {
  const { plan, price } = route.params;

  const handlePayment = () => {
    alert(`Payment successful for ${plan} Plan ($${price})`);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Payment</Text>
      <Text style={styles.plan}>Plan: {plan}</Text>
      <Text style={styles.price}>Amount: ${price}</Text>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1b1c1c",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  plan: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: "#ff5252",
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: "#d32f2f",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PaymentScreen;

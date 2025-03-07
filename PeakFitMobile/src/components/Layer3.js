import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Layer3 = () => {
  const [planType, setPlanType] = useState('monthly');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pricing Plans</Text>
      <View style={styles.pricingContainer}>
        {/* Toggle Button */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, planType === 'yearly' && styles.activeToggle]}
            onPress={() => setPlanType('yearly')}
          >
            <Text style={styles.toggleText}>Yearly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, planType === 'monthly' && styles.activeToggle]}
            onPress={() => setPlanType('monthly')}
          >
            <Text style={styles.toggleText}>Monthly</Text>
          </TouchableOpacity>
        </View>

        {/* Pricing Plans */}
        <View style={styles.plansContainer}>
          {["Beginner", "ProPack Plan", "Custom Plan"].map((plan, index) => (
            <View key={index} style={styles.planCard}>
              <View style={styles.cardContent}>
                <Text style={styles.planTitle}>{plan}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.currency}>₹</Text>
                  <Text style={styles.price}>
                    {planType === 'monthly' ? (index === 0 ? '999' : index === 1 ? '1499' : '1999') : (index === 0 ? '9990' : index === 1 ? '14990' : '19990')}
                  </Text>
                  <Text style={styles.duration}>/{planType}</Text>
                </View>

                <View style={styles.featuresList}>
                  <Text style={styles.feature}>Includes premium features</Text>
                  <Text style={styles.feature}>Personalized coaching</Text>
                  <Text style={styles.feature}>Exclusive access</Text>
                </View>

                {/* Centered Subscribe Button */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.subscribeButton}>
                    <Text style={styles.buttonText}>Subscribe</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    paddingVertical: 20,
    alignItems: "center", // Center align content
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  pricingContainer: {
    width: "90%", // Ensure the layout doesn't exceed screen width
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#333',
  },
  activeToggle: {
    backgroundColor: '#555',
  },
  toggleText: {
    color: '#fff',
  },
  plansContainer: {
    width: "100%",
  },
  planCard: {
    width: "100%",
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardContent: {
    alignItems: "center",
  },
  planTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  currency: {
    color: '#fff',
    marginRight: 5,
  },
  price: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  duration: {
    color: '#fff',
    marginLeft: 5,
  },
  featuresList: {
    alignItems: "center",
    marginBottom: 20,
  },
  feature: {
    color: '#fff',
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center", // Ensure button is centered
  },
  subscribeButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Layer3;

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get("window"); // Get device width

const services = [
  {
    title: 'Losing Weight',
    description: "Achieving and maintaining a healthy weight is not just about appearance — it's about improving your overall health and well-being.",
    image: require('../../assets/img1.png'),
  },
  {
    title: 'Home Workouts',
    description: "Whether you're new to exercise or an experienced fitness enthusiast, home workouts are a convenient way to stay active and achieve your fitness goals.",
    image: require('../../assets/img2.png'),
  },
  {
    title: 'Bodybuilding',
    description: "Bodybuilding is a structured process of building muscle mass and strength through consistent resistance training, proper nutrition, and recovery.",
    image: require('../../assets/img3.png'),
  },
  {
    title: 'Gym Plan',
    description: "Creating an effective gym plan is essential for achieving your fitness goals. Whether you want to build muscle, lose fat, increase strength, or improve overall health.",
    image: require('../../assets/img4.png'),
  },
];

const Layer2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>OUR</Text>
        <Text style={styles.headerTextSecondary}>SERVICES</Text>
      </View>
      <Text style={styles.description}>At This Part You Can Easily access all of our services. Take a look at them and choose whichever you want.</Text>
      {services.map((service, index) => (
        <View key={index} style={styles.serviceItem}>
          <View style={styles.textContainer}>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
            <TouchableOpacity onPress={() => console.log("Learn More pressed")} activeOpacity={0.7}>
              <Text style={styles.learnMore}>Learn More</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={service.image}
            style={styles.serviceImage}
            resizeMode="contain"
            accessibilityLabel={`${service.title} image`}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    marginRight: 5,
  },
  headerTextSecondary: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#d32f2f', // Adds a subtle shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  serviceTitle: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceDescription: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10,
  },
  learnMore: {
    color: 'lightblue',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  serviceImage: {
    width: width * 0.25, // Responsive width
    height: width * 0.25, // Responsive height (square aspect ratio)
  },
});

export default Layer2;
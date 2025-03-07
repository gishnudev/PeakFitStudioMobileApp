import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Layer5 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Our Coaches</Text>
      <View style={styles.row}>
        {/* Coach 1: GISHNU */}
        <View style={styles.coachCard}>
          <Image
            source={require('../../assets/img11.png')} // Replace with your image path
            style={styles.coachImage}
          />
          <View style={styles.coachInfo}>
            <Text style={styles.coachName}>GISHNU</Text>
            <Text style={styles.coachRole}>Personal Trainer</Text>
            <TouchableOpacity onPress={() => console.log('Learn More about GISHNU')}>
              <Text style={styles.learnMore}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Coach 2: KAI */}
        <View style={styles.coachCard}>
          <Image
            source={require('../../assets/img12.png')} // Replace with your image path
            style={styles.coachImage}
          />
          <View style={styles.coachInfo}>
            <Text style={styles.coachName}>KAI</Text>
            <Text style={styles.coachRole}>Personal Trainer</Text>
            <TouchableOpacity onPress={() => console.log('Learn More about KAI')}>
              <Text style={styles.learnMore}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Coach 3: JAY */}
        <View style={styles.coachCard}>
          <Image
            source={require('../../assets/img14.png')} // Replace with your image path
            style={styles.coachImage}
          />
          <View style={styles.coachInfo}>
            <Text style={styles.coachName}>JAY</Text>
            <Text style={styles.coachRole}>Personal Trainer</Text>
            <TouchableOpacity onPress={() => console.log('Learn More about JAY')}>
              <Text style={styles.learnMore}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Coach 4: RAMON */}
        <View style={styles.coachCard}>
          <Image
            source={require('../../assets/img13.png')} // Replace with your image path
            style={styles.coachImage}
          />
          <View style={styles.coachInfo}>
            <Text style={styles.coachName}>RAMON</Text>
            <Text style={styles.coachRole}>Personal Trainer</Text>
            <TouchableOpacity onPress={() => console.log('Learn More about RAMON')}>
              <Text style={styles.learnMore}>Learn More</Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  coachCard: {
    width: '48%', // Adjust based on your layout
    marginBottom: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
  },
  coachImage: {
    width: '100%',
    height: 200, // Adjust based on your image aspect ratio
  },
  coachInfo: {
    padding: 10,
    alignItems: 'center',
  },
  coachName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  coachRole: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  learnMore: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default Layer5;
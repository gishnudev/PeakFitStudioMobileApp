import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Layer4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.calculators}>
      <View style={styles.row}>
        {/* Calorie Calculator */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Calorie Calculator</Text>
          <Image source={require('../../assets/img5.png')} style={styles.cardImage} />
          <TouchableOpacity onPress={() => navigation.navigate('CalorieCal')}>
            <Text style={styles.link}>More</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* BMI Calculator */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>BMI Calculator</Text>
          <Image source={require('../../assets/img6.png')} style={styles.cardImage} />
          <TouchableOpacity onPress={() => navigation.navigate('BmiCal')}>
            <Text style={styles.link}>More</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Macronutrients */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Macronutrients</Text>
          <Image source={require('../../assets/img7.png')} style={styles.cardImage} />
          <TouchableOpacity onPress={() => navigation.navigate('Macro')}>
            <Text style={styles.link}>More</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Micronutrients */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Micronutrients</Text>
          <Image source={require('../../assets/img8.png')} style={styles.cardImage} />
          <TouchableOpacity onPress={() => navigation.navigate('Micro')}>
            <Text style={styles.link}>More</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Goal Setting */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Goal Setting</Text>
          <Image source={require('../../assets/img9.png')} style={styles.cardImage} />
          <TouchableOpacity onPress={() => navigation.navigate('GoalSet')}>
            <Text style={styles.link}>More</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculators: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: 150,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 10,
  },
  cardTitle: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Layer4;

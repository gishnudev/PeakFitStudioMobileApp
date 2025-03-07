import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const BmiCal = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBmi = () => {
    let heightM = parseFloat(height);
    let weightKg = parseFloat(weight);

    heightM = heightM > 3 ? heightM / 100 : heightM;

    if (isNaN(heightM) || isNaN(weightKg) || heightM <= 0 || weightKg <= 0) {
      setBmi(null);
      setCategory("Please enter valid numbers.");
      return;
    }

    const bmiValue = weightKg / (heightM * heightM);
    const bmiFixed = parseFloat(bmiValue.toFixed(2));
    setBmi(bmiFixed);

    if (bmiFixed < 16) setCategory("Severe Underweight");
    else if (bmiFixed < 17) setCategory("Moderate Underweight");
    else if (bmiFixed < 18.5) setCategory("Mild Underweight");
    else if (bmiFixed < 25) setCategory("Normal Weight");
    else if (bmiFixed < 30) setCategory("Overweight");
    else if (bmiFixed < 35) setCategory("Obese Class 1 (Mild)");
    else if (bmiFixed < 40) setCategory("Obese Class 2 (Severe)");
    else setCategory("Obese Class 3 (Very Severe)");
  };

  return (
    <ImageBackground source={require("../../assets/3d-gym-equipment (2).jpg")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>BMI Calculator</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter height (cm or m)"
          placeholderTextColor="gray"
          value={height}
          onChangeText={setHeight}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter weight (kg)"
          placeholderTextColor="gray"
          value={weight}
          onChangeText={setWeight}
        />
        <TouchableOpacity style={styles.button} onPress={calculateBmi}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>
        {bmi !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Your BMI: {bmi}</Text>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  categoryText: {
    fontSize: 18,
    color: "#ffcc00",
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default BmiCal;
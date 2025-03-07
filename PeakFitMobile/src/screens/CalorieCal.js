import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  Alert,
} from "react-native";


const CalorieCal = () => {
  const [query, setQuery] = useState("");
  const [nutritionData, setNutritionData] = useState([]);
  const [error, setError] = useState(null);

  const fetchNutritionData = async () => {
    try {
      const response = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
        {
          method: "GET",
          headers: { "X-Api-Key": "7UWblnZRSRzc2L2JdzTH4w==hAPggmBODKn1K8ae" },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setNutritionData(data.items || []);
    } catch (err) {
      setError(err.message);
      Alert.alert("Error", err.message);
    }
  };

  const totalCalories = nutritionData.reduce((sum, item) => sum + item.calories, 0);
  const totalProtein = nutritionData.reduce((sum, item) => sum + item.protein_g, 0);
  const totalFat = nutritionData.reduce((sum, item) => sum + item.fat_total_g, 0);
  const totalCarbs = nutritionData.reduce((sum, item) => sum + item.carbohydrates_total_g, 0);

  return (
    <ImageBackground source={require("../../assets/3d-gym-equipment (2).jpg")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Nutrition Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter food item..."
          placeholderTextColor="gray"
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.button} onPress={fetchNutritionData}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        {nutritionData.length > 0 && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultTitle}>Results:</Text>
            <FlatList
              data={nutritionData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.resultRow}>
                  <Text style={styles.foodName}>{item.name}</Text>
                  <Text style={styles.foodInfo}>{item.calories} kcal</Text>
                  <Text style={styles.foodInfo}>{item.protein_g}g Protein</Text>
                  <Text style={styles.foodInfo}>{item.fat_total_g}g Fat</Text>
                  <Text style={styles.foodInfo}>{item.carbohydrates_total_g}g Carbs</Text>
                </View>
              )}
              ListFooterComponent={() => (
                <View style={styles.totalRow}>
                  <Text style={styles.foodName}>Total</Text>
                  <Text style={styles.foodInfo}>{totalCalories} kcal</Text>
                  <Text style={styles.foodInfo}>{totalProtein}g Protein</Text>
                  <Text style={styles.foodInfo}>{totalFat}g Fat</Text>
                  <Text style={styles.foodInfo}>{totalCarbs}g Carbs</Text>
                </View>
              )}
            />
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
  resultsContainer: {
    marginTop: 20,
    width: "100%",
  },
  resultTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  foodName: {
    flex: 2,
    color: "white",
    fontWeight: "bold",
  },
  foodInfo: {
    flex: 1,
    color: "#ffcc00",
    textAlign: "center",
  },
});

export default CalorieCal;
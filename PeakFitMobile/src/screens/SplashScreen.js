import React, { useEffect, useRef } from "react";
import { View, Animated, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: false, // ❗ Fix for "useNativeDriver" warning
        }),
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false, // ❗ Fix for "useNativeDriver" warning
        }),
      ]).start(() => {
        navigation.replace("Home"); // Ensure "Home" exists in your navigation stack
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/logo-transparent-png.png")}
        resizeMode="contain" // ✅ Move resizeMode to props (fix deprecation warning)
        style={[
          styles.logo,
          { transform: [{ scale: scaleValue }], opacity: opacityValue },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;

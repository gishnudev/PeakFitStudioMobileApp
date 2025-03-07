import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigation();

  const menuItems = [
    { name: "Home", screen: "Home" },
    { name: "Coaching", screen: "Coaching" },
    { name: "Programs", screen: "Programs" },
    { name: "Membership", screen: "Membership" },
    { name: "About", screen: "About" },
  ];

  return (
    <View style={styles.container}>
      {/* Top Navbar - Menu Icon & Right-Side Icons */}
      <View style={styles.navbar}>
        {/* Hamburger Menu Icon */}
        <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
          <Ionicons name={isMenuOpen ? "close" : "menu"} size={30} color="white" />
        </TouchableOpacity>

        {/* Website Logo (Centered) */}
        <Image
          source={require("../../assets/logo-transparent-png.png")} // Verify the path
          style={styles.logo}
        />

        {/* Right Side - Login & Sign-Up Icons */}
        <View style={styles.rightIcons}>
          <TouchableOpacity 
            style={{ marginRight: 15 }} 
            onPress={() => navigation.navigate('Login')}
          >
            <Ionicons name="log-in" size={25} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
            <Ionicons name="person-add" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Navbar Menu - Only Show When isMenuOpen is true */}
      {isMenuOpen && (
        <View style={styles.menu}>
          {/* Navigation Links */}
          {menuItems.map(({ name, screen }) => (
            <TouchableOpacity 
              key={screen} 
              style={styles.menuItem} 
              onPress={() => {
                navigation.navigate(screen);
                setIsMenuOpen(false); // Close menu after navigation
              }}
            >
              <Text style={styles.menuText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#000",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1b1c1c",
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 60, // Fixed height for the navbar
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  rightIcons: {
    flexDirection: "row",
  },
  menu: {
    width: "100%",
    backgroundColor: "#d32f2f",
    paddingVertical: 15,
    alignItems: "center",
  },
  menuItem: {
    marginVertical: 10, // Better spacing
  },
  menuText: {
    color: "white",
    fontSize: 18,
  },
});

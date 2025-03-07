import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "http://localhost:3000/auth"; // Update this if needed

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  // ✅ Fetch Profile
  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const response = await axios.get(`${API_URL}/profile`, { 
        headers: { Authorization: `Bearer ${token}` } 
      });      

      setProfile(response.data);
      setEmail(response.data.email);
      setName(response.data.name || ""); // Handle empty name case
    } catch (error) {
      console.error("Profile Fetch Error:", error.response?.data || error.message);
      alert("Error", "Failed to fetch profile");
    }
  };

  // ✅ Update Profile
  const updateProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No token found");

      await axios.put(
        `${API_URL}/update-profile`,
        { email, name },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Success", "Profile updated successfully");
      fetchProfile(); // Refresh profile data
    } catch (error) {
      console.error("Profile Update Error:", error.response?.data || error.message);
      alert("Error", "Failed to update profile");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {profile ? (
        <>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Profile</Text>
          <Text>Email: {profile.email}</Text>
          <Text>Name: {profile.name || "Not set"}</Text>

          {/* Update Section */}
          <Text style={{ marginTop: 20, fontSize: 16 }}>Update Profile</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={{
              borderBottomWidth: 1,
              marginBottom: 10,
              padding: 5,
            }}
          />
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Name"
            style={{
              borderBottomWidth: 1,
              marginBottom: 10,
              padding: 5,
            }}
          />
          <Button title="Update Profile" onPress={updateProfile} />
        </>
      ) : (
        <Text>Loading profile...</Text>
      )}
    </View>
  );
};

export default Profile;

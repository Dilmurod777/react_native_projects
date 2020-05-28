import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Profile from "../../components/Profile/Profile";
const ProfileScreen = () => (
  <ScrollView style={styles.container}>
    <Profile />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1
  }
});

export default ProfileScreen;

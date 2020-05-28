import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import AddIssue from "../../components/AddIssue/AddIssue";
const AddIssueScreen = () => (
  <ScrollView style={styles.container}>
    <AddIssue />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1
  }
});

export default AddIssueScreen;

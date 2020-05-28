import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";
import IssueFilter from "./IssueFilter";
import Icon from "react-native-vector-icons/FontAwesome";
const IssueFilterResults = () => (
  <View style={styles.container}>
    <ScrollView horizontal={true} style={styles.filterHolder}>
      <IssueFilter />
      <IssueFilter />
      <IssueFilter />
      <IssueFilter />
      <IssueFilter />
      <IssueFilter />
    </ScrollView>
    <TouchableOpacity style={styles.icon}>
      <Icon name="align-right" size={28} />
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  filterHolder: {},
  icon: {
    justifyContent: "center",
    padding: 3,
    marginLeft: 20
  }
});
export default IssueFilterResults;

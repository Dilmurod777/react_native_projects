import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const IssueFilter = () => (
  <View>
    <TouchableOpacity>
      <View style={styles.border}>
        <Text style={styles.text}>Most Popular</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  filterHolder: {},
  border: {
    borderRadius: 16,
    borderColor: "#87A9FF",
    borderWidth: 2,
    marginRight: 8,
    padding: 7
  },
  text: {
    fontSize: 18,
    color: "#87A9FF"
  }
});
export default IssueFilter;

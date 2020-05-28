import React from "react";
import { View, StyleSheet, Text } from "react-native";

const IssueInfo = () => (
  <View>
    <Text style={styles.header}>Trash in the street</Text>
    <Text style={styles.text}>
      There is so much trash on Buyuk Ipak yoli(Maksim Gorkiy) street. I see
      this picture every day I walk nearby and nobody collects it. I do not
      understand the reason “Maxsustrans” never reaches this place. I am asking
      you to fix this problem as soon as possible. Thanks in advance.
    </Text>
    <Text style={styles.textRight}>Kolimov Kosim</Text>
    <Text style={styles.textRight}>28.04.19</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize: 26,
    color: "#666666",
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    color: "#4F4F4F",
    fontSize: 15
  },
  textRight: {
    textAlign: "right",
    marginTop: 5,
    fontSize: 15,
    color: "#666"
  }
});
export default IssueInfo;

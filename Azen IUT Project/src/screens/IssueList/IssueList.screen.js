import React from "react";
import {
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  View
} from "react-native";
import IssueList from "../../components/IssueList/IssueList";
import IssueSearch from "../../components/IssueList/IssueSearch";
import IssueFilterResults from "../../components/IssueList/IssueFilterResults";
const IssueListScreen = () => (
  <View style={styles.container}>
    <View>
      <IssueFilterResults />
    </View>
    <View style={styles.issueSearch}>
      <IssueSearch />
    </View>
    <View>
      <IssueList />
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10
    // backgroundColor: "black"
  },
  issueSearch: {
    marginTop: 15,
    marginBottom: 20
  }
  // filterHolder: {
  //   flex: 1
  // }
});
export default IssueListScreen;

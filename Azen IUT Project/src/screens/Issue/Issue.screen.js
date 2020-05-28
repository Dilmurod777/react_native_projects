import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ImageCarousel from "../../components/Issue/ImageCarousel";
import IssueCategoryInfo from "../../components/Issue/IssueCategoryInfo";
import IssueComments from "../../components/Issue/IssueComments";
import IssueInfo from "../../components/Issue/IssueInfo";
import IssueVote from "../../components/Issue/IssueVote";
const IssueScreen = () => (
  <ScrollView style={styles.container}>
    <View>
      <ImageCarousel />
    </View>
    <View style={{ padding: 15 }}>
      <View>
        <IssueCategoryInfo />
      </View>
      <View>
        <IssueInfo />
      </View>
      <View>
        <IssueVote />
      </View>
      <View>
        <IssueComments />
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1
  }
});
export default IssueScreen;

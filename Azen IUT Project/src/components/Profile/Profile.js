import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextArea,
  TextInput,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Photo from "../../../images/profile.jpg";
const Profile = () => (
  <View style={styles.container}>
    <View style={styles.imageHolder}>
      <Image style={styles.image} source={Photo} />
      <TouchableOpacity style={styles.cam}>
        <Icon name="camera" style={styles.icon} />
      </TouchableOpacity>
    </View>
    <View style={styles.info}>
      <Text style={styles.left}>Name:</Text>
      <Text style={styles.right}>Abbos</Text>
    </View>
    <View style={styles.info}>
      <Text style={styles.left}>Surname:</Text>
      <Text style={styles.right}>Kushakov</Text>
    </View>
    <View style={styles.info}>
      <Text style={styles.left}>Phone number:</Text>
      <Text style={styles.right}>+998933761234</Text>
    </View>
    <View style={styles.info}>
      <Text style={styles.left}>Passport number:</Text>
      <Text style={styles.right}>AA3761234</Text>
    </View>
    <View style={styles.info}>
      <Text style={styles.left}>SSN:</Text>
      <Text style={styles.right}>123456778</Text>
    </View>
    <View style={styles.btns}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>My issues</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#FFC44F", marginRight: 0 }]}
      >
        <Text style={styles.btnText}>My comments</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 25,
    paddingRight: 25
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 200,
    borderColor: "black",
    borderWidth: 1
  },
  cam: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "#CFCFCF",
    shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 7
    },
    shadowOpacity: 1,
    shadowRadius: 9.51,
    elevation: 15
  },
  icon: {
    fontSize: 36,
    color: "#FF4F4F"
  },
  info: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  left: {
    width: "50%",
    textAlign: "right",
    marginRight: 10,
    fontSize: 16,
    color: "#4F4F4F"
  },
  right: {
    color: "#919191",
    width: "50%",
    fontSize: 14
  },
  input: {
    width: "50%",
    borderBottomColor: "#787878",
    borderBottomWidth: 1,
    padding: 5
  },
  btns: {
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 50
  },
  btn: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#13DD34",
    borderRadius: 3,
    padding: 5,
    height: 35,
    marginRight: 10
  },
  btnIcon: {
    fontSize: 16,
    color: "white"
  },
  btnText: {
    color: "white",
    fontSize: 14,
    marginLeft: 2
  }
});
export default Profile;

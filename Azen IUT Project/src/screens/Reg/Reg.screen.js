import React from "react";
import {StyleSheet, View} from "react-native";
import Reg from "../../components/Reg/Reg";
import LinearGradient from "react-native-linear-gradient";

const RegScreen = () => (
	<LinearGradient
		start={{x: 0.0, y: 0.15}}
		end={{x: 0.85, y: 1.0}}
		colors={["#92FF81", "#00F0FF"]}
		style={styles.linearGradient}
	>
		<View style={styles.container}>
			<Reg/>
		</View>
	</LinearGradient>
);

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1
	},
	linearGradient: {
		flex: 1,
		width: "100%"
	}
});
export default RegScreen;
